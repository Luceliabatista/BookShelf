import { Component, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';;

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  public formularioLogin = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });


  hasUnitNumber=false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,

    ) {}

    get email(){
      return this.formularioLogin.get('email')
    }

    get senha(){
      return this.formularioLogin.get('senha')
    }

    loginFirebase(){
      if(!this.formularioLogin.valid){
        return;
      }
      const {email, senha} = this.formularioLogin.value;
      this.autenticacaoFirebaseService.loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações'
        })
      ).subscribe(()=>{
        this.rotas.navigate(['/cdd'])
        this.resetarCamposLogin();
      })
  }
  //oemail =  loginUsuario.email
 @Input() public passarEmail(){
    return this.email
  }
  @Input() public oemail = this.email


  // #52 - Rotina para limpar campos após o login [10 pts]
  resetarCamposLogin() {
    this.formularioLogin.reset();
    this.formularioLogin = new FormGroup({
      email: new FormControl(null),
      senha: new FormControl(null),
    });
  }
}

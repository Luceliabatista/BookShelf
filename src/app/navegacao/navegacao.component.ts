import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { NavegacaoService } from './../servicosInterface/navegacao.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  showFiller = false

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  logoMenu='../../assets/imagens/logoBS4.png';
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone=80;
  aIcone=80;
  //Controle das rotas do menu.
  itensMenu$: Observable<MenuNavegador[]>
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    toolbarColor : string = 'primary';
    toolbarBoolean: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private telaLogin: MatDialog,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegadorService: NavegacaoService,
    private toast: HotToastService,
    ) {
      this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }

    //mudar cor toolbar
    changeColor(){
      this.toolbarColor = this.toolbarColor === 'primary' ? 'accent' : 'primary';
      this.toolbarBoolean = !this.toolbarBoolean;
    }

    abrirLogin(erroMsg: string){
      this.telaLogin.open(AppLoginComponent,{
        data: erroMsg
      })
    }

    sairUsuario(){
      this.autenticacaoFirebaseService.sairLogin().pipe(
        this.toast.observe({
          success: 'Você deslogou do BookShelf',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, tente novamente ou fale com o suporte'
        })
      ).subscribe(() =>{
        this.rotas.navigate([''])
      })
    }

    //melhorias tollbar
    larguraInterna!: number;
    ngOnInit(): void {
     this.larguraInterna = window.innerWidth;

    }

    @HostListener('window:resize', ['$event'])
    onResize(event:number) {
    this.larguraInterna = window.innerWidth;
    }
}

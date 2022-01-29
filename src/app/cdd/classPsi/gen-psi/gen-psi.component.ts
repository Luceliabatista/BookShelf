import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

import { PsicologiaService } from '../../service/psicologia.service';
import { Psicologia } from './../../modelos/psicologia';

@Component({
  selector: 'app-gen-psi',
  templateUrl: './gen-psi.component.html',
  styleUrls: ['./gen-psi.component.scss']
})
export class GenPsiComponent implements OnInit {

  livrosPsicologia$: Observable<Psicologia[]>;
  visaoColunas=['id_livro','tituloLivro','autorLivro'];

  constructor(
    private psicologiaService: PsicologiaService,
    public dialogo: MatDialog) {

    this.livrosPsicologia$ = psicologiaService.listagemPsicologia()
    .pipe(
      catchError(error => {
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS"+error.status)
        return of([])
        })
      );
    }

    abrirDialogoErro(erroMsg: string){
      this.dialogo.open(AppDialogosComponent, {
        data: erroMsg
      })
    }

  ngOnInit(): void {
  }

}

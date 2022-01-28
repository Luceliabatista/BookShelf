import { Direito } from './../modelos/direito';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

import {DireitoService } from '../service/direito.service';

@Component({
  selector: 'app-class-direito',
  templateUrl: './class-direito.component.html',
  styleUrls: ['./class-direito.component.scss']
})
export class ClassDireitoComponent implements OnInit {

  livrosDireito$:Observable<Direito[]>;
  visaoColunas=['id_livro','tituloLivro','autorLivro'];


  constructor(private direitoService: DireitoService, public dialogo: MatDialog) {
    this.livrosDireito$ = direitoService.listagemDireito().pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    )
   }

   abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { Teatro } from './../modelos/teatro';
import { TeatroService } from './../service/teatro.service';

@Component({
  selector: 'app-class-teatro',
  templateUrl: './class-teatro.component.html',
  styleUrls: ['./class-teatro.component.scss']
})
export class ClassTeatroComponent implements OnInit {

  livrosTeatro$: Observable<Teatro[]>;
  visaoColunas=['id_livro', 'tituloLivro', 'autorLivro'];

  constructor(
    private teatroService: TeatroService,
    public dialogo: MatDialog
  ) {
    this.livrosTeatro$ = teatroService.listagemTeatro()
    .pipe(
      catchError(error => {
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
   }

   abrirDialogoErro(erroMsg: string) {
     this.dialogo.open(AppDialogosComponent,{
       data: erroMsg
     }
      )
   }

  ngOnInit(): void {
  }

}

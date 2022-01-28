import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

import { Tecnologia } from '../../modelos/tecnologia';
import { TecnologiaService } from '../../service/tecnologia.service';

@Component({
  selector: 'app-tec.view',
  templateUrl: './tec.view.component.html',
  styleUrls: ['./tec.view.component.scss']
})
export class TecViewComponent implements OnInit {

  livrosTec$: Observable <Tecnologia[]>;
  visaoColunas=['id_livro','tituloLivro','autorLivro'];

  constructor(
    private tecService: TecnologiaService,
    public dialogo: MatDialog
    ) {
    this.livrosTec$ = tecService.listagemTec()
    .pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }

}

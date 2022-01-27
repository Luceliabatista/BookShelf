import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

import { Empreendedorismo } from '../../modelos/empreendedorismo';
import { EmpreendedorismoService } from '../../service/empreendedorismo.service';

@Component({
  selector: 'app-empreend-view',
  templateUrl: './empreend-view.component.html',
  styleUrls: ['./empreend-view.component.scss']
})
export class EmpreendViewComponent implements OnInit {

  livrosEmpreend$: Observable <Empreendedorismo[]>;
  visaoColunas=['id_livro','tituloLivro','autorLivro'];

  constructor(
    private empreendService: EmpreendedorismoService,
    public dialogo: MatDialog
    ) {
    this.livrosEmpreend$ = empreendService.listagemEmpreend()
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

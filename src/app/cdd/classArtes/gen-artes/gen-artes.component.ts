import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

import { Artes } from '../../modelos/artes';
import { ArtesService } from './../../service/artes.service';

@Component({
  selector: 'app-gen-artes',
  templateUrl: './gen-artes.component.html',
  styleUrls: ['./gen-artes.component.scss']
})
export class GenArtesComponent implements OnInit {

  livrosArtes$: Observable<Artes[]>;
  visaoColunas=['id_livro','tituloLivro','autorLivro'];

  constructor(
    private artesService: ArtesService,
    public dialogo: MatDialog) {

    this.livrosArtes$ = artesService.listagemArtes()
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

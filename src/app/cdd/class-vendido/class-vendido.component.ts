import { VendidosM } from './../modelos/vendidosM';
import { VendidosServiceMundial } from './../service/vendidos-m.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

import { Vendidos } from './../modelos/vendidos';
import { VendidosService } from './../service/vendidos.service';

@Component({
  selector: 'app-class-vendido',
  templateUrl: './class-vendido.component.html',
  styleUrls: ['./class-vendido.component.scss']
})
export class ClassVendidoComponent implements OnInit {
  livrosVendidos$: Observable<Vendidos[]>;
  livrosVendidosM$: Observable<VendidosM[]>;
  visaoColunas=['_idLivro','nomeLivro','autor', 'numVendas'];

  constructor(
    private vendidosService: VendidosService,
    private vendidosServiceMundial: VendidosServiceMundial,
    public dialogo: MatDialog
  ) {

    this.livrosVendidosM$ = vendidosServiceMundial.listagemVendidosM().pipe(

      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    )

  this.livrosVendidos$ = vendidosService.listagemVendidos().pipe(

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

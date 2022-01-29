import { MatDialog } from '@angular/material/dialog';
import { VendidosService } from './../service/vendidos.service';
import { Vendidos } from './../modelos/vendidos';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from 'src/app/app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-class-vendido',
  templateUrl: './class-vendido.component.html',
  styleUrls: ['./class-vendido.component.scss']
})
export class ClassVendidoComponent implements OnInit {

  livrosVendidos$: Observable<Vendidos[]>;
  visaoColunas=['_idLivro','nomeLivro','autor', 'numVendas'];

  constructor(
    private vendidosService: VendidosService,
    public dialogo: MatDialog
  ) {

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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { VendidosM } from './../modelos/vendidosM';

@Injectable({
  providedIn: 'root'
})
export class VendidosServiceMundial {

  private readonly uriAPI = '../../../assets/vendidosMundial.json'

  constructor(private http: HttpClient) {  }

  listagemVendidosM(){
    return this.http.get<VendidosM[]>(this.uriAPI).pipe(
      first(),
      delay(500),
      tap(apiVendidosM => console.log(apiVendidosM))
    )
  }
}

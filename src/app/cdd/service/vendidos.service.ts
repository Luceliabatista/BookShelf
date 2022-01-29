import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Vendidos } from './../modelos/vendidos';

@Injectable({
  providedIn: 'root'
})
export class VendidosService {

  private readonly uriAPI = '../../../assets/vendidos.json'

  constructor(private http: HttpClient) {  }

  listagemVendidos(){
    return this.http.get<Vendidos[]>(this.uriAPI).pipe(
      first(),
      delay(500),
      tap(apiVendidos => console.log(apiVendidos))
    )
  }
}

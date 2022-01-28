import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Direito } from '../modelos/direito';

@Injectable({
  providedIn: 'root'
})
export class DireitoService {

  private readonly uriAPI = '/assets/direito.json'

  constructor( private http: HttpClient) { }

  listagemDireito(){
    return this.http.get<Direito[]> (this.uriAPI)
    .pipe(first(),
    delay(500),
    tap(apiDireito => console.log(apiDireito)))
  }

}



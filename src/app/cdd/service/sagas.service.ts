import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Sagas } from '../modelos/sagas';

@Injectable({
  providedIn: 'root'
})
export class SagasService {
  private readonly uriAPI='./../../../assets/sagas.json'

  constructor(private http: HttpClient) { }
  listagemSagas(){
    return this.http.get<Sagas[]>(this.uriAPI).pipe(
      first(),
      delay(500),
      tap(apiSagas=>{
        console.log(apiSagas)
      })

    )
  }

}

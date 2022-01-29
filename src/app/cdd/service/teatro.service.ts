import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Teatro } from './../modelos/teatro';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {

  private readonly uriAPI = '/assets/teatro.json'

  constructor(private litrosTeatro: HttpClient) { }

  listagemTeatro() {
    return this.litrosTeatro.get<Teatro[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiTeatro => console.log(apiTeatro))
    )
  }
}

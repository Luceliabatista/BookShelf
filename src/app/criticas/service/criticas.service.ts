import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Criticas } from '../models/criticas';

@Injectable({
  providedIn: 'root'
})
export class CriticasService {

  private readonly uriAPI = '../../assets/criticas.json'

  constructor(private cardcriticas: HttpClient) {}
  listagemCriticas() {
    return this.cardcriticas.get<Criticas[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiCriticas => {
        console.log(apiCriticas)
      })
    )
  }
}

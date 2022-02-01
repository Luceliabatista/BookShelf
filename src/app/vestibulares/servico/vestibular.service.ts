import { first, delay, tap } from 'rxjs';
import { Vestibular } from './../modelo/vestibular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VestibularService {

  private readonly uriAPI = '../../../assets/vest_ita.json';
  private readonly uriAPI2 = '../../../assets/vest_puc.json';
  private readonly uriAPI3 = '../../../assets/vest_unicamp.json';
  private readonly uriAPI4='../../../assets/vest_unitau.json'

  constructor(private cardVest: HttpClient) { }

  listaIta() {
    return this.cardVest.get<Vestibular[]>(this.uriAPI)
      .pipe(
        first(),
        delay(500),
        tap(apiIta => console.log(apiIta))
    )
  }

  listaPuc() {
    return this.cardVest.get<Vestibular[]>(this.uriAPI2)
      .pipe(
        first(),
        delay(500),
        tap(apiPuc => console.log(apiPuc))
    )
  }

    listaUnicamp() {
    return this.cardVest.get<Vestibular[]>(this.uriAPI3)
      .pipe(
        first(),
        delay(500),
        tap(apiUnicamp => console.log(apiUnicamp))
    )
  }

    listaUnitau() {
    return this.cardVest.get<Vestibular[]>(this.uriAPI4)
      .pipe(
        first(),
        delay(500),
        tap(apiUnitau => console.log(apiUnitau))
    )
  }

}

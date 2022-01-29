import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Psicologia } from '../modelos/psicologia';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

  private readonly uriAPi = '/assets/psicologia.json'

  constructor(private livrosPsicologia: HttpClient) { }

  listagemPsicologia() {
    return this.livrosPsicologia.get<Psicologia[]>(this.uriAPi
      ).pipe (
        first(),
        delay(500),
        tap(apiPsicologia => console.log(apiPsicologia))
      )
  }
}

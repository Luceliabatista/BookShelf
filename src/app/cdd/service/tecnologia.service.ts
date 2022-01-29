import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Tecnologia } from '../modelos/tecnologia';

@Injectable({
  providedIn: 'root'
})

export class TecnologiaService {

  private readonly uriAPI = '/assets/tecnologia.json'

  constructor(private livrosTec: HttpClient) { }

  listagemTec() {
    return this.livrosTec.get<Tecnologia[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiTec => console.log(apiTec))
    )

  }
}

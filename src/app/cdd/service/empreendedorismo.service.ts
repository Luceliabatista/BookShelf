import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Empreendedorismo } from '../modelos/empreendedorismo';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorismoService {

  private readonly uriAPI = '/assets/empreendedorismo.json'

  constructor(private livrosEmpreend: HttpClient) { }

  listagemEmpreend() {
    return this.livrosEmpreend.get<Empreendedorismo[]>(this.uriAPI)
      .pipe(
        first(),
        delay(500),
        tap(apiEmpreend => console.log(apiEmpreend))
    )
  }
}



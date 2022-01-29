import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Biblioteconomia } from '../models/biblioteconomia';

@Injectable({
  providedIn: 'root'
})
export class BiblioteconomiaService {

  private readonly uriAPI='../../../assets/biblioteconomia.json'

  constructor(private cardbiblio: HttpClient) { }

    listagemBiblio(){
    return this.cardbiblio.get<Biblioteconomia[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiBiblio => console.log(apiBiblio))
    )
  }

}

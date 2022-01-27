import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Artes } from '../modelos/artes';

@Injectable({
  providedIn: 'root'
})
export class ArtesService {

  private readonly uriAPI = '/assets/artes.json'

  constructor(private livrosArtes: HttpClient) { }

  listagemArtes(){
    return this.livrosArtes.get<Artes[]>(this.uriAPI
    ).pipe(
      first(),
      delay(500),
      tap(apiArtes => console.log(apiArtes))
    )

    }
}


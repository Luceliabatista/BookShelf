import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Reportagem } from '../modelos/reportagem';

@Injectable({
  providedIn: 'root'
})
export class ReportagemService {
  private readonly uriAPI = './../../../assets/reportagem.json'

  constructor(private http: HttpClient) {}
  listagemReportagem(){
    return this.http.get<Reportagem[]>(this.uriAPI).pipe(
      first(),
      delay(500),
      tap(apiReportagem => console.log(apiReportagem))
    )
  }

}

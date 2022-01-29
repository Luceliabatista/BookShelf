import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { SugestaoModel } from '../modelos/sugestao';

@Injectable({
  providedIn: 'root'
})
export class SugestaoService {

  private readonly uriAPI = '../../../assets/sugestao.json'

  constructor(private httpcliente: HttpClient) { }

  sugestoes(){
    return this.httpcliente.get<SugestaoModel[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiReportagem=> console.log(apiReportagem))
    )
  }

}

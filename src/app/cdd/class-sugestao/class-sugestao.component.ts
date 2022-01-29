import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { SugestaoService } from 'src/app/cdd/service/sugestao.service';
import { AutenticacaoFirebaseService } from 'src/app/servicosInterface/autenticacao-firebase.service';

import { SugestaoModel } from './../modelos/sugestao';

@Component({
  selector: 'app-class-sugestao',
  templateUrl: './class-sugestao.component.html',
  styleUrls: ['./class-sugestao.component.scss']
})
export class ClassSugestaoComponent implements OnInit {

  sugestoes$: Observable<SugestaoModel[]>;
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  sugestao = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.sugestoes$;
      }
      return this.sugestoes$;
    })
  )

  constructor(
    private sugestaoservice: SugestaoService,
    private breakpointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {

      this.sugestoes$ = sugestaoservice.sugestoes()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )

     }

  ngOnInit(): void {
  }

}

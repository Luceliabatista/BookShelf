import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AutenticacaoFirebaseService } from 'src/app/servicosInterface/autenticacao-firebase.service';

import { SagasService } from './../../cdd/service/sagas.service';
import { Sagas } from './../modelos/sagas';


@Component({
  selector: 'app-class-sagas',
  templateUrl: './class-sagas.component.html',
  styleUrls: ['./class-sagas.component.scss']
})
export class ClassSagasComponent {
  cards$: Observable<Sagas[]>;
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sagasService: SagasService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = sagasService.listagemSagas()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}

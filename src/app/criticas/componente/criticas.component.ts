import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AutenticacaoFirebaseService } from 'src/app/servicosInterface/autenticacao-firebase.service';

import { Criticas } from '../models/criticas';
import { CriticasService } from '../service/criticas.service';


@Component({
  selector: 'app-criticas',
  templateUrl: '../componente/criticas.component.html',
  styleUrls: ['../componente/criticas.component.scss']
})
export class CriticasComponent {
  cards$: Observable<Criticas[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserve.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
  })
);

  constructor(
    private breakpointObserve: BreakpointObserver,
    private criticasService: CriticasService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cards$ = criticasService.listagemCriticas()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
  }
}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AutenticacaoFirebaseService } from 'src/app/servicosInterface/autenticacao-firebase.service';

import { Vestibular } from '../../modelo/vestibular';
import { VestibularService } from '../../servico/vestibular.service';

@Component({
  selector: 'app-vestibular',
  templateUrl: './vestibular.component.html',
  styleUrls: ['./vestibular.component.scss']
})
export class VestibularComponent {

  cardsIta$: Observable<Vestibular[]>;
  cardsPuc$: Observable<Vestibular[]>;
  cardsUnicamp$: Observable<Vestibular[]>;
  cardsUnitau$: Observable<Vestibular[]>;

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsIta$, this.cardsPuc$, this.cardsUnicamp$, this.cardsUnitau$;
      }
      return this.cardsIta$, this.cardsPuc$, this.cardsUnicamp$, this.cardsUnitau$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private vestibularService: VestibularService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
      this.cardsIta$ = vestibularService.listaIta()
      .pipe(
        catchError(error =>{
          return of([])
        })
      ),
    this.cardsPuc$ = vestibularService.listaPuc()
      .pipe(
        catchError(error =>{
          return of([])
        })
      ),
    this.cardsUnicamp$ = vestibularService.listaUnicamp()
      .pipe(
        catchError(error =>{
          return of([])
        })
    ),
    this.cardsUnitau$ = vestibularService.listaUnitau()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}


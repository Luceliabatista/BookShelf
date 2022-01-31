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

  cards$: Observable<Vestibular[]>;
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
    private biblioService: VestibularService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
      this.cards$ = biblioService.listaIta()
      .pipe(
        catchError(error =>{
          return of([])
        })
      ),
    this.cards$ = biblioService.listaPuc()
      .pipe(
        catchError(error =>{
          return of([])
        })
      ),
    this.cards$ = biblioService.listaUnicamp()
      .pipe(
        catchError(error =>{
          return of([])
        })
    ),
    this.cards$ = biblioService.listaUnitau()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}


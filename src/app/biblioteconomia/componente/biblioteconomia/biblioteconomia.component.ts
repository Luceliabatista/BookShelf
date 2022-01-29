import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutenticacaoFirebaseService } from 'src/app/servicosInterface/autenticacao-firebase.service';


import { Biblioteconomia } from '../../models/biblioteconomia';
import { BiblioteconomiaService } from '../../service/biblioteconomia.service';

@Component({
  selector: 'app-biblioteconomia',
  templateUrl: './biblioteconomia.component.html',
  styleUrls: ['./biblioteconomia.component.scss']
})
export class BiblioteconomiaComponent {

  cards$: Observable<Biblioteconomia[]>;
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
    private biblioService: BiblioteconomiaService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
      this.cards$ = biblioService.listagemBiblio()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}


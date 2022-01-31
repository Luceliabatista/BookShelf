import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AutenticacaoFirebaseService } from 'src/app/servicosInterface/autenticacao-firebase.service';

import { Reportagem } from '../modelos/reportagem';
import { ReportagemService } from '../service/reportagem.service';

@Component({
  selector: 'app-class-reportagem',
  templateUrl: './class-reportagem.component.html',
  styleUrls: ['./class-reportagem.component.scss']
})
export class ClassReportagemComponent {
  cards$: Observable<Reportagem[]>;
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
    private reportagemService: ReportagemService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = reportagemService.listagemReportagem()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}

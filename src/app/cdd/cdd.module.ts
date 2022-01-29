import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { ClassDireitoComponent } from './class-direito/class-direito.component';
import { ClassReportagemComponent } from './class-reportagem/class-reportagem.component';
import { ClassSagasComponent } from './class-sagas/class-sagas.component';
import { ClassTeatroComponent } from './class-teatro/class-teatro.component';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { GenPsiComponent } from './classPsi/gen-psi/gen-psi.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';
import { ClassSugestaoComponent } from './class-sugestao/class-sugestao.component';
import { ClassVendidoComponent } from './class-vendido/class-vendido.component';



@NgModule({
  declarations: [

    ClassesComponent,
    GenArtesComponent,
    EmpreendViewComponent,
    TecViewComponent,
    GenArtesComponent,
    GenPsiComponent,
    ClassReportagemComponent,
    ClassTeatroComponent,
    ClassDireitoComponent,
    TecViewComponent,
    ClassSugestaoComponent,
    ClassSagasComponent,
    ClassVendidoComponent,
  ],
    imports: [

    CommonModule,
    CddRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule,
    MatListModule

  ]
})
export class CddModule { }

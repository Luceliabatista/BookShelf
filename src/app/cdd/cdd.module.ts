import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';
import { GenPsiComponent } from './classPsi/gen-psi/gen-psi.component';


@NgModule({
  declarations: [
    ClassesComponent,
    EmpreendViewComponent,
    TecViewComponent,
    GenArtesComponent,
    GenPsiComponent
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

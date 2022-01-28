import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { ClassDireitoComponent } from './class-direito/class-direito.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';
import { ClassTeatroComponent } from './class-teatro/class-teatro.component';


@NgModule({
  declarations: [
    ClassesComponent,
    GenArtesComponent,
    EmpreendViewComponent,
    TecViewComponent,
    GenArtesComponent,
    ClassTeatroComponent,
    ClassDireitoComponent,
    TecViewComponent
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

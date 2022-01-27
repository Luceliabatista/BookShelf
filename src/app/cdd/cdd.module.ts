import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';


@NgModule({
  declarations: [
    ClassesComponent,
    GenArtesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule
  ]
})
export class CddModule { }

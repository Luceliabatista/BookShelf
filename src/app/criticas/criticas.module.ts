import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppCompartilhadoModule } from '../app-compartilhado/app-compartilhado.module';
import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { CriticasComponent } from './componente/criticas.component';
import { CriticasRoutingModule } from './criticas-routing.module';


@NgModule({
  declarations: [
    CriticasComponent
  ],
  imports: [
    CommonModule,
    CriticasRoutingModule,
    AppCompartilhadoModule,
    AppMaterialModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CriticasModule { }

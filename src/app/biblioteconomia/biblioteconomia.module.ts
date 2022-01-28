import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppCompartilhadoModule } from '../app-compartilhado/app-compartilhado.module';
import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { BiblioteconomiaRoutingModule } from './biblioteconomia-routing.module';
import { BiblioteconomiaComponent } from './componente/biblioteconomia/biblioteconomia.component';


@NgModule({
  declarations: [
    BiblioteconomiaComponent
  ],
  imports: [
    CommonModule,
    BiblioteconomiaRoutingModule,
    AppCompartilhadoModule,
    AppMaterialModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class BiblioteconomiaModule { }

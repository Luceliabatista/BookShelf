import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VestibularesRoutingModule } from './vestibulares-routing.module';
import { VestibularComponent } from './componente/vestibular/vestibular.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    VestibularComponent
  ],
  imports: [
    CommonModule,
    VestibularesRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class VestibularesModule { }

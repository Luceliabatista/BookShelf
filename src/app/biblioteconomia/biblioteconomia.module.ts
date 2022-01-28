import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiblioteconomiaRoutingModule } from './biblioteconomia-routing.module';
import { BiblioteconomiaComponent } from './componente/biblioteconomia/biblioteconomia.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    BiblioteconomiaComponent
  ],
  imports: [
    CommonModule,
    BiblioteconomiaRoutingModule, MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class BiblioteconomiaModule { }

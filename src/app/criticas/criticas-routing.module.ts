import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriticasComponent } from './componente/criticas.component';

const routes: Routes = [
  {
    path:'', component: CriticasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticasRoutingModule { }

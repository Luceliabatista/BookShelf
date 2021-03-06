import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiblioteconomiaComponent } from './componente/biblioteconomia/biblioteconomia.component';

const routes: Routes = [
  {
    path:'', component: BiblioteconomiaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblioteconomiaRoutingModule { }

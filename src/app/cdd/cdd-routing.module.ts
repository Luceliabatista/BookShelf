import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: '', component: ClassesComponent },
  {path: 'livros-empreendedorismo', component: EmpreendViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CddRoutingModule {}

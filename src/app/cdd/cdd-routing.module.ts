import { ClassesComponent } from './classes/classes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';

const routes: Routes = [
  {
    path:'', component:ClassesComponent
  },
  {
    path: 'livros-arte', component: GenArtesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CddRoutingModule {}

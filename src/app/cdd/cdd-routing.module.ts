import { Direito } from './modelos/direito';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';
import { ClassDireitoComponent } from './class-direito/class-direito.component';

const routes: Routes = [
  {
    path:'', component:ClassesComponent
  },
  {
    path: 'livros-arte', component: GenArtesComponent
  },
  {
    path: 'livros-empreendedorismo', component: EmpreendViewComponent
  },
  {
    path: 'livros-tecnologia', component: TecViewComponent
  },
  {
    path: 'livros-direito', component: ClassDireitoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CddRoutingModule {}

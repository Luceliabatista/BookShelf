import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassDireitoComponent } from './class-direito/class-direito.component';
import { ClassReportagemComponent } from './class-reportagem/class-reportagem.component';
import { ClassSagasComponent } from './class-sagas/class-sagas.component';
import { ClassTeatroComponent } from './class-teatro/class-teatro.component';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { GenPsiComponent } from './classPsi/gen-psi/gen-psi.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';

const routes: Routes = [
  {
    path: '',
    component: ClassesComponent,
  },
  {
    path: 'livros-arte',
    component: GenArtesComponent,
  },
  {
    path: 'livros-empreendedorismo',
    component: EmpreendViewComponent,
  },
  {
    path: 'livros-tecnologia',
    component: TecViewComponent,
  },
  {
    path: 'livros-psicologia',
    component: GenPsiComponent,
  },
  {
    path: 'livros-reportagem',
    component: ClassReportagemComponent,
  },
  {
    path: 'livros-reportagem', component: ClassReportagemComponent,
  },
  {
    path: 'livros-teatro', component: ClassTeatroComponent,
  },
  {
    path: 'livros-direito', component: ClassDireitoComponent,
  },
  {
    path: 'livros-sagas', component: ClassSagasComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CddRoutingModule {}

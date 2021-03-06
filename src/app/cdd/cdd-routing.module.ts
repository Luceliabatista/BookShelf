import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassDireitoComponent } from './class-direito/class-direito.component';
import { ClassSagasComponent } from './class-sagas/class-sagas.component';
import { ClassTeatroComponent } from './class-teatro/class-teatro.component';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { GenPsiComponent } from './classPsi/gen-psi/gen-psi.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';
import { ClassReportagemComponent } from './class-especialmes/class-reportagem.component';
import { ClassSugestaoComponent } from './class-sugestao/class-sugestao.component';
import { ClassVendidoComponent } from './class-vendido/class-vendido.component';

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
    path: 'livros-reportagem', component: ClassReportagemComponent,
  },
  {
    path: 'livros-teatro', component: ClassTeatroComponent,
  },
  {
    path: 'livros-direito', component: ClassDireitoComponent,
  },
  {
    path: 'sugestao', component: ClassSugestaoComponent
  },
  {
    path: 'livros-sagas', component: ClassSagasComponent
  },
  {
    path: 'livros-vendidos', component: ClassVendidoComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CddRoutingModule {}

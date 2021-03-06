import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { ClassDireitoComponent } from './cdd/class-direito/class-direito.component';
import { ClassReportagemComponent } from './cdd/class-especialmes/class-reportagem.component';
import { ClassSagasComponent } from './cdd/class-sagas/class-sagas.component';
import { ClassSugestaoComponent } from './cdd/class-sugestao/class-sugestao.component';
import { ClassTeatroComponent } from './cdd/class-teatro/class-teatro.component';
import { ClassVendidoComponent } from './cdd/class-vendido/class-vendido.component';
import { GenArtesComponent } from './cdd/classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './cdd/classEmpreend/empreend-view/empreend-view.component';
import { GenPsiComponent } from './cdd/classPsi/gen-psi/gen-psi.component';
import { TecViewComponent } from './cdd/classTec/tec.view/tec.view.component';
import { CriticasComponent } from './criticas/componente/criticas.component';
import { FeedComponent } from './feed/feed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VestibularComponent } from './vestibulares/componente/vestibular/vestibular.component';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
     path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'biblioteconomia',
    loadChildren: () => import('./biblioteconomia/biblioteconomia.module').then(c => c.BiblioteconomiaModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'criticas-livros', component: CriticasComponent,
    loadChildren: () => import('./criticas/criticas-routing.module').then(c => c.CriticasRoutingModule),
    ...canActivate(enviarSemLogin)
  },
    {
    path: 'vestibulares', component: VestibularComponent,
    loadChildren: () => import('./vestibulares/vestibulares.module').then(c => c.VestibularesModule),
    ...canActivate(enviarSemLogin)
  },

  {
    path: 'livros-artes', component: GenArtesComponent,
  },
  {
    path: 'livros-empreendedorismo', component: EmpreendViewComponent,   ...canActivate(enviarSemLogin)
  },
  {
    path: 'livros-tecnologia', component: TecViewComponent
  },
  {
    path: 'livros-psicologia', component: GenPsiComponent,   ...canActivate(enviarSemLogin)
  },
  {
    path: 'livros-mes', component: ClassReportagemComponent,     ...canActivate(enviarSemLogin)

  },
  {
    path: 'livros-teatro', component: ClassTeatroComponent
  },
  {
    path: 'livros-direito', component: ClassDireitoComponent
  },
  {
    path: 'sugestao', component: ClassSugestaoComponent,   ...canActivate(enviarSemLogin)
  },
  {
    path: 'livros-sagas', component: ClassSagasComponent
  },
  {
    path: 'livros-vendidos', component: ClassVendidoComponent,     ...canActivate(enviarSemLogin)

  },
  {
    path:'user-profile', component: UserprofileComponent
  },
  {
    path:'**', component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { GenArtesComponent } from './cdd/classArtes/gen-artes/gen-artes.component';
import { EmpreendViewComponent } from './cdd/classEmpreend/empreend-view/empreend-view.component';
import { TecViewComponent } from './cdd/classTec/tec.view/tec.view.component';
import { FeedComponent } from './feed/feed.component';


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
    path: 'livros-artes', component: GenArtesComponent
  },
  {
    path: 'livros-empreendedorismo', component: EmpreendViewComponent
  },
  {
    path: 'livros-tecnologia', component: TecViewComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

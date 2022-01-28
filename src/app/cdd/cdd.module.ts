import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { AppMaterialModule } from '../app-compartilhado/app-material/app-material.module';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { CddRoutingModule } from './cdd-routing.module';
import { EmpreendViewComponent } from './classEmpreend/empreend-view/empreend-view.component';
import { ClassesComponent } from './classes/classes.component';
import { GenArtesComponent } from './classArtes/gen-artes/gen-artes.component';
import { ClassDireitoComponent } from './class-direito/class-direito.component';
import { TecViewComponent } from './classTec/tec.view/tec.view.component';
<<<<<<< HEAD
import { GenPsiComponent } from './classPsi/gen-psi/gen-psi.component';
=======
import { ClassReportagemComponent } from './class-reportagem/class-reportagem.component';
import { ClassTeatroComponent } from './class-teatro/class-teatro.component';
<<<<<<< HEAD
import { SugestaoComponent } from './sugestao/sugestao.component';
=======
>>>>>>> main
>>>>>>> 43dbf1daf0a49083942aa824ef09ac1b6f04c603


@NgModule({
  declarations: [

    ClassesComponent,
    GenArtesComponent,
    EmpreendViewComponent,
    TecViewComponent,
    GenArtesComponent,
<<<<<<< HEAD
    GenPsiComponent
=======
    ClassReportagemComponent,
    ClassTeatroComponent,
    ClassDireitoComponent,
<<<<<<< HEAD
    TecViewComponent,
    SugestaoComponent

=======
    TecViewComponent
>>>>>>> main
>>>>>>> 43dbf1daf0a49083942aa824ef09ac1b6f04c603
  ],
    imports: [

    CommonModule,
    CddRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule,
    MatListModule
    
  ]
})
export class CddModule { }

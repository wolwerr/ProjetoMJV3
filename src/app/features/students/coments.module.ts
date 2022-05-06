import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentListComponent } from './components/coment-list/coment-list.component';
import { ComentComponent } from './components/coment/coment.component';
import { ComentsPageComponent } from './pages/coments-page/coments-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComentDetailsPageComponent } from './pages/coment-details-page/coment-details-page.component';
import { RouterModule } from '@angular/router';
import { CreateComentPageComponent } from './pages/create-coment-page/create-coment-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComentListComponent,
    ComentComponent,
    ComentsPageComponent,
    ComentDetailsPageComponent,
    CreateComentPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ComentsModule { }

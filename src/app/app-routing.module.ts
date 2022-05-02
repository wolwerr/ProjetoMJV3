import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreateComentPageComponent } from './features/students/pages/create-coment-page/create-coment-page.component';
import { ComentDetailsPageComponent } from './features/students/pages/coment-details-page/coment-details-page.component';
import { ComentsPageComponent } from './features/students/pages/coments-page/coments-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'coments', component: ComentsPageComponent, canActivate: [AuthGuard] },
  { path: 'coment-details/:id', component: ComentDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'create-coment', component: CreateComentPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './core/authenticate/login/login.component';
import { CrudUsuariosComponent } from './modules/crud-usuarios/crud-usuarios.component';
import { CrudChamadosComponent } from './modules/crud-chamados/crud-chamados.component';
import { AuthGuard } from './core/helpers/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: CrudUsuariosComponent },
  { path: 'chamados', component: CrudChamadosComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

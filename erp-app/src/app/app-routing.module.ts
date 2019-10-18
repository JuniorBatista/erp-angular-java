import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './core/authenticate/login/login.component';
import { LogoutComponent } from './core/authenticate/logout/logout.component';
import { CrudUsuariosComponent } from './modules/crud-usuarios/crud-usuarios.component';
import { CrudChamadosComponent } from './modules/crud-chamados/crud-chamados.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'', component: HomeComponent },
  { path:'usuarios', component: CrudUsuariosComponent },
  { path:'chamados', component: CrudChamadosComponent },
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

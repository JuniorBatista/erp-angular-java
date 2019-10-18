import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticateComponent } from './core/authenticate/authenticate.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/authenticate/login/login.component';
import { MenuComponent } from './core/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CrudChamadosComponent } from './modules/crud-chamados/crud-chamados.component';
import { CrudUsuariosComponent } from './modules/crud-usuarios/crud-usuarios.component';

import { AuthGuard } from './core/authenticate/authenticate.guard';

import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ToastComponent } from './core/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    CrudChamadosComponent,
    CrudUsuariosComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    InputTextModule,
    FileUploadModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    MenubarModule,
    CardModule
  ],
  providers: [MessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

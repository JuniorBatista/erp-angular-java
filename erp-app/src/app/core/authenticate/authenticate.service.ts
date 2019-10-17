import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../../classes/usuario/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  usuario: Usuario = new Usuario();
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  apiUrlLogin = 'http://localhost:8080/autenthicate/login';
  apiUrlLogout = 'http://localhost:8080/autenthicate/logout';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: Usuario) {

    if (user.email !== '' && user.password !== '') {

     const options = { params: new HttpParams({fromString: '?usuario=' + user.email + '&password=' + user.password}) };

     this.httpClient.get(this.apiUrlLogin, options)
        .subscribe(resposta => this.usuario = resposta as Usuario);

     if (this.usuario.isLoggedIn) {
        this.loggedIn.next(true);
        this.router.navigate(['/']);
      }

    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}

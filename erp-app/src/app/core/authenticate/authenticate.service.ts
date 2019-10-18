import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../../classes/usuario/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  usuario: Usuario = new Usuario();
  usuarioLogin: Usuario = new Usuario();

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  apiUrlLogin = 'http://localhost:8080/autenthicate/login';
  apiUrlLogout = 'http://localhost:8080/autenthicate/logout';

  constructor(private httpClient: HttpClient, private router: Router) {
     this.currentUserSubject = new BehaviorSubject<Usuario>(
        JSON.parse(localStorage.getItem('currentUser')));
     this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

  login(login: string, password: string) {

    if (login !== '' && password !== '') {

      this.usuarioLogin.email = login;
      this.usuarioLogin.senha = password;

      return this.httpClient.post(this.apiUrlLogin, this.usuarioLogin)
        .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(this.usuarioLogin);
                return user;
            }));

    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}

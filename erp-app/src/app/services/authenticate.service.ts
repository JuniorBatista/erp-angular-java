import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  apiUrlLogout = 'http://localhost:8080/authenticate/logout';
  apiUrlLogin = 'http://localhost:8080/authenticate/login';

  constructor(private httpClient: HttpClient) { }

  login() {
    return this.httpClient.get(this.apiUrlLogin);
  }

  logout() {
    return this.httpClient.get(this.apiUrlLogout);
  }

}

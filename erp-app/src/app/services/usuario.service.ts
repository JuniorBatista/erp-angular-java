import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../classes/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  apiUrl = 'http://localhost:8080/usuarios';
  
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(usuario:Usuario) {
    return this.httpClient.post(this.apiUrl, usuario);
  }

}

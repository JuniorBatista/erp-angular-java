import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Chamado } from '../classes/chamado/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  apiUrl = 'http://localhost:8080/chamado';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(chamado: Chamado) {
    return this.httpClient.post(this.apiUrl, chamado);
  }

}

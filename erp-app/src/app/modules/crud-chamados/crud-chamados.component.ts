import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ChamadoService } from '../../services/chamado.service';
import { UsuarioService } from '../../services/usuario.service';

import { Chamado } from 'src/app/classes/chamado/chamado';
import { Usuario } from 'src/app/classes/usuario/usuario';

@Component({
  selector: 'app-crud-chamados',
  templateUrl: './crud-chamados.component.html',
  styleUrls: ['./crud-chamados.component.css']
})
export class CrudChamadosComponent implements OnInit {

  listaUsuarios: Usuario[];
  listaAtribuidos: Usuario[];
  listaSolicitantes: Usuario[];

  chamado: Chamado;
  chamados: Chamado[];

  constructor(
    private usuarioService: UsuarioService,
    private chamadoService: ChamadoService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.consultar();
    this.getListaUsuarios();
  }

  getListaUsuarios() {
    this.usuarioService.listar()
      .subscribe(resposta => {
        this.listaAtribuidos = resposta as Usuario[];
        this.listaSolicitantes = resposta as Usuario[];
      });
  }

  consultar() {
    this.chamadoService.listar()
      .subscribe(resposta => this.chamados = resposta as Chamado[]);
  }

  adicionar() {
    console.info('this.chamado');
    console.info(this.chamado);
    this.chamadoService.adicionar(this.chamado)
      .subscribe(() => {
        this.chamado = new Chamado();
        this.consultar();

        this.messageService.add({
          severity: 'success',
          summary: 'Chamado adicionado com sucesso'
        });

      },
      resposta => {
        let msgError = 'Erro inesperado. Tente novamente.';

        if (resposta.error.message) {
          msgError = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msgError
        });
      });
  }

}

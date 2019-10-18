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

  listaAtribuidos: Usuario[];
  listaSolicitantes: Usuario[];

  selectedAtribuido: Usuario;
  selectedSolicitante: Usuario;

  chamado: Chamado = new Chamado();
  chamados = Array<Chamado>();

  constructor(
    private usuarioService: UsuarioService,
    private chamadoService: ChamadoService,
    private messageService: MessageService
  ) {

    this.usuarioService.listar()
      .subscribe(
          resposta => {
            this.listaAtribuidos = resposta as Array<Usuario>;
            this.listaSolicitantes = resposta as Array<Usuario>;
          }
      );

  }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.chamadoService.listar()
      .subscribe(resposta => this.chamados = resposta as Array<Chamado>);
  }

  adicionar() {
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

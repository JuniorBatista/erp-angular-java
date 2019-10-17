import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/classes/usuario/usuario';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css']
})
export class CrudUsuariosComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios = Array<Usuario>();

  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.usuarioService.listar()
      .subscribe(resposta => this.usuarios =  resposta as Array<Usuario>);
  }

  adicionar() {
    this.usuarioService.adicionar(this.usuario)
      .subscribe(() => {
        this.usuario = new Usuario();
        this.consultar();

        this.messageService.add({
          severity: 'success',
          summary: 'Usuário adicionado com sucesso'
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

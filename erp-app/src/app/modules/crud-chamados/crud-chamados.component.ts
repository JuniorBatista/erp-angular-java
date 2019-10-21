import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ChamadoService } from '../../services/chamado.service';
import { UsuarioService } from '../../services/usuario.service';

import { Chamado } from 'src/app/classes/chamado/chamado';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-crud-chamados',
  templateUrl: './crud-chamados.component.html',
  styleUrls: ['./crud-chamados.component.css']
})
export class CrudChamadosComponent implements OnInit {

  chamadoForm: FormGroup;
  loading = false;
  submitted = false;

  chamado = new Chamado();
  chamados = Array<Chamado>();

  listaAtribuidos = Array<Usuario>();
  listaSolicitantes = Array<Usuario>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private chamadoService: ChamadoService,
    private messageService: MessageService,
    private authenticationService: AuthenticationService,
  ) {

  }

  ngOnInit() {

    this.chamadoForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
  });

    this.consultar();
    this.getListaUsuarios();
  }

  // convenience getter for easy access to form fields
  get f() { return this.chamadoForm.controls; }

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

  adicionarChamado() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.chamadoForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Cadastro inválido'
      });
      return;
    }

    this.loading = true;

    console.info('this.chamadoForm.value'); console.info(this.chamadoForm.value);

    this.chamadoService.adicionar(this.chamadoForm.value)
      .subscribe(() => {
        this.chamado = new Chamado();
        this.consultar();

        this.messageService.add({
          severity: 'success',
          summary: 'Chamado adicionado com sucesso'
        });
        this.loading = false;

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
        this.loading = false;
      });
  }

}

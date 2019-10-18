import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/usuario/usuario';
import { AuthenticationService } from '../services/authentication.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Usuario;
  usuarios = Array<Usuario>();

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UsuarioService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.listar()
      .subscribe(resposta => this.usuarios =  resposta as Array<Usuario>);
  }

}

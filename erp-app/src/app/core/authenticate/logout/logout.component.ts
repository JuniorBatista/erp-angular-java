import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../../../services/authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.authenticateService.logout();
  }

  login() {
    this.authenticateService.login();
  }

}

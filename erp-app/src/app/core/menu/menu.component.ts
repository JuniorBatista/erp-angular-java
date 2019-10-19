import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  items: MenuItem[];

  ngOnInit() {
    /*
    console.info(this.authService);
    console.info(this.authService.currentUserValue);
    */
    this.showMenu = this.authService.currentUserValue !== null;
    this.items = [
      {label: 'Home',  routerLink: '/home'},
      {label: 'Usuários', routerLink: '/usuarios'},
      {label: 'Chamados', routerLink: '/chamados'}
    ];

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

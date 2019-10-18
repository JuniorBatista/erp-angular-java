import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu: boolean = this.authService.currentUserValue !== null;

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home',  routerLink: '/home'},  
      {label: 'Usuários', routerLink: '/usuarios'},
      {label: 'Chamados', routerLink: '/chamados'}
    ];

  }

}

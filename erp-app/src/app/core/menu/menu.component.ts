import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
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

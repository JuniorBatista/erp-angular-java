import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShowMenu = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.info("this");
    console.info(this);

  console.info("this.router");
    console.info(this.router);

    console.info("this.router.url");
    console.info(this.router.url);
    if (this.router.url === '/login') {
      this.isShowMenu = true;
    }

  }

}

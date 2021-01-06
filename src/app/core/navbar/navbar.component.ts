import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/config/menu';

interface LanguageFlag {
  lang: string;
  country: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu = new Menu();

  constructor() { }

  ngOnInit() {
    console.log(this.menu);
  }

}

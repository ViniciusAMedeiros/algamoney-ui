import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor;
    return (ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1);
  }

  isInstagramApp(){
    var ua = navigator.userAgent || navigator.vendor;
    return (ua.indexOf("Instagram") > -1 || ua.indexOf("Instagram") > -1);
  }

}

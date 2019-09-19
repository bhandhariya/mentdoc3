import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }
  openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }
}

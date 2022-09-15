import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuOpened = true;
    console.log('the menu is now opened');
  }

  closeMenu() {
    this.menuOpened = false;
  }

}

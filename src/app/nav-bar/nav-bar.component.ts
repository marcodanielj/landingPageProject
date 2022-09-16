import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuOpened = false;

  showFeaturesDropdown = false;
  showCompanyDropdown = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuOpened = true;
    console.log('the menu is now opened');
  }

  openDropdown(item: string) {

    switch (item) {

      case 'features':
        this.showFeaturesDropdown = true;
        break;

      case 'company':
        this.showCompanyDropdown = true;
        break;
    }
  }

  closeDropdown(item: string) {

    switch (item) {

      case 'features':
        this.showFeaturesDropdown = false;
        break;

      case 'company':
        this.showCompanyDropdown = false;
        break;
    }
  }

  closeMenu() {
    this.menuOpened = false;
  }

}

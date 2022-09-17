import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuOpened = true;

  showFeaturesDropdown = false;
  showCompanyDropdown = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuOpened = true;
  }

  dropdownAction(item: string) {

    switch (item) {

      case 'features':

      if (this.showFeaturesDropdown == false) {
        this.showFeaturesDropdown = true;
        this.showCompanyDropdown = false;
      } else {
        this.showFeaturesDropdown = false
      }
      
      break;

      case 'company':

      if (this.showCompanyDropdown == false) {
        this.showCompanyDropdown = true;
        this.showFeaturesDropdown = false;
      } else {
        this.showCompanyDropdown = false
      }
      
      break;

     
    }
  }

  closeMenu() {

    this.showCompanyDropdown = false;
    this.showFeaturesDropdown = false;
    this.menuOpened = false;
  }

}

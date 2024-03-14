import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  mainMenuItems = [
    //   {
    //     path: 'home',
    //     name: 'HOME',
    //   },
    //   {
    //     path: 'products',
    //     name: 'PRODUCTS',
    //   },
    'Home',
    'Products',
    'Sale',
    'New arrival',
    'Contact',
    'Service',
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  OnSubscribe() {
    alert('You are successfully subscribed. Now you can enjoy our services');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-headerService',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderServiceComponent {
  OnSubscribe() {
    alert('You are successfully subscribed. Now you can enjoy our services');
  }
}

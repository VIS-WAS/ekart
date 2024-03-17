import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  OnSubscribe() {
    alert('You are successfully subscribed. Now you can enjoy our services');
  }
}

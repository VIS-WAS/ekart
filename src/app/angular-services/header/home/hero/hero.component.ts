import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  //------------// Dependency over ride on child component //---------------//
  // providers: [SubscribeService],
  //------------// Dependency over ride on child component //---------------//
})
export class HeroComponent {
  constructor(private subService: SubscribeService) {}
  OnSubscribe() {
    this.subService.OnSubscribeClicked('Monthly');
  }
}

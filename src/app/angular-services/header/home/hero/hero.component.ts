import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  //-----------//we are injectiong serice using constructor//--------//

  // constructor(private subService: SubscribeService) {}

  //-----------//we are injectiong serice using constructor//--------//

  subService = inject(SubscribeService);

  OnSubscribe() {
    this.subService.OnSubscribeClicked('Monthly');
  }
}

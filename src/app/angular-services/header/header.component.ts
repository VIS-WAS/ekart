import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-headerService',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderServiceComponent {
  OnSubscribe() {
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('Yearly');
  }
}

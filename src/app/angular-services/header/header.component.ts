import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-headerService',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService],
})
export class HeaderServiceComponent {
  constructor(private subSerive: SubscribeService) {}
  OnSubscribe() {
    this.subSerive.OnSubscribeClicked('Yearly');
  }
}

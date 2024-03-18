import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SubscribeService],
})
export class SidebarComponent {
  constructor(private subSerive: SubscribeService) {}
  OnSubscribe() {
    this.subSerive.OnSubscribeClicked('Quaterly');
  }
}

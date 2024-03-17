import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';

  tab: string = '';

  onInfoClicked() {
    this.tab = 'info';
  }
  onserviceClicked() {
    this.tab = 'service';
  }
  onprivacyClicked() {
    this.tab = 'privacy';
  }
  onuserClicked() {
    this.tab = 'user';
  }
}

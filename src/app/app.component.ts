import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';

  display: boolean = true;

  displayTerms() {
    this.display = !this.display;
  }
}

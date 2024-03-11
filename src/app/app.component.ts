import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';

  //---------//ngDocheck example//------------//

  inputVal: string = '';

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  constructor() {
    console.log('app component constructor called');
  }
  //---------//ngDocheck example//------------//
}

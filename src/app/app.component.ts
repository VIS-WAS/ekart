import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';

  //---------//ngOnchange example//------------//

  inputVal: string = '';

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
  //---------//ngOnchange example//------------//

  //---------//constructor example//------------//

  constructor() {
    console.log('app component constructor called');
  }

  //---------//constructor example//------------//
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ekart';

  //---------//ngOnDestroy example//------------//

  inputVal: string = '';

  toDestroy: boolean = false;

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  constructor() {
    // console.log('app component constructor called');
  }

  ngAfterViewInit() {
    // console.log('parent ngAfterViewInit is called');
  }

  ngAfterViewChecked() {
    // console.log('Parent ngAfterViewChecked is called');
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
  //---------//ngOnDestroy example//------------//
}

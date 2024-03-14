import { Component } from '@angular/core';

@Component({
  selector: 'z-teach',
  templateUrl: './z-teach.component.html',
  styleUrls: ['./z-teach.component.css'],
})
export class ZTeachComponent {
  // ----------------//property and event binding//-----------------//

  textValue: string = 'Hello World';
  count: number = 0;

  logValue() {
    this.count = this.count + 1;
    document.getElementById('display').innerHTML =
      'You tried to enter value ' + this.count;
  }
  // ----------------//property and event binding//-----------------//
}

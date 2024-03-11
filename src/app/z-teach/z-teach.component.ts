import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'z-teach',
  templateUrl: './z-teach.component.html',
  styleUrls: ['./z-teach.component.css'],
})
export class ZTeachComponent implements OnChanges {
  title: string = 'Demo component';

  //---------//ngOnchange example//------------//

  @Input() message: string;

  //---------//constructor example//------------//

  constructor() {
    console.log('z-teach component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  //---------//constructor example//------------//

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchange hook  called');
    console.log(this.message);
    console.log(changes);
  }

  //---------//ngOnchange example//------------//
}

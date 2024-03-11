import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'z-teach',
  templateUrl: './z-teach.component.html',
  styleUrls: ['./z-teach.component.css'],
})
export class ZTeachComponent implements OnChanges, OnInit, DoCheck {
  title: string = 'Demo component';

  //---------//ngDocheck example//------------//

  @Input() message: string;

  constructor() {
    console.log('z-teach component constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchange hook  called');
  }

  ngOnInit() {
    console.log('ngInit hook  called');
  }

  ngDoCheck() {
    console.log('ngDoCheck is called');
  }

  //---------//ngDocheck example//------------//
}

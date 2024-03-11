import {
  Component,
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
export class ZTeachComponent implements OnChanges, OnInit {
  title: string = 'Demo component';

  //---------//ngOnchange example//------------//

  @Input() message: string[];

  //---------//ngOnchange example//------------//

  //---------//ngOninit example//------------//

  @ViewChild('temp') tempPara: ElementRef;

  constructor() {
    console.log('z-teach component constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchange hook  called');
    console.log(this.message);
  }

  ngOnInit() {
    console.log('ngInit hook  called');
    // console.log(this.tempPara.nativeElement); // this will throw an error due to view, child component,
    //project view in not yet initiaze here. So @ViewChild() ....@contenChildren will not ne available

    //---------//ngOnInit example//------------//
  }
}

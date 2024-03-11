import {
  AfterContentInit,
  Component,
  ContentChild,
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
export class ZTeachComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit
{
  title: string = 'Demo component';

  //---------//ngAfterContentInit example//------------//

  @Input() message: string;

  @ContentChild('temp') paraContent: ElementRef;

  constructor() {
    console.log('z-teach component constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchange hook  called');
  }

  ngOnInit() {
    console.log('ngInit hook  called');
    console.log('In ngOnInit()', this.paraContent); //will be undefined
  }

  ngDoCheck() {
    console.log('ngDoCheck is called');
    console.log('In ngDoCheck()', this.paraContent); //will be undefined
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called');
    console.log('In ngAfterContentInit()', this.paraContent.nativeElement);
  }

  //---------//ngAfterContentInit example//------------//
}

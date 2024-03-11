import {
  AfterContentChecked,
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
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  title: string = 'Demo component';

  //---------//ngAfterContentChecked example//------------//

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
  }

  ngDoCheck() {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called');
    console.log('ngAfterContentInit', this.paraContent.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called');
    console.log('ngAfterContentchecked', this.paraContent.nativeElement);
  }

  //---------//ngAfterContentChecked example//------------//
}

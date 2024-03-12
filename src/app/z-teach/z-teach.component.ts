import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
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
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  title: string = 'Demo component';

  //---------//ngOnDestroy example//------------//

  @Input() message: string;

  @ViewChild('childtemp') tempPara: ElementRef;

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
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit() {
    console.log('child ngAfterViewInit is called');
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked is called');
    // console.log(this.tempPara.nativeElement.textContent);  //--to hold the changes made
  }

  ngOnDestroy() {
    console.log('child ngOnDestroy is called');
  }
  //---------//ngOnDestroy example//------------//
}

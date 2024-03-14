import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]',
})
export class SampleDirective {
  //------------//@HostBinding and @HostListner//------------//

  count: number = 0;
  constructor() {}
  @HostBinding('value') inputValue: string = 'Hi! There';

  @HostListener('focus') onFocus() {
    this.count = this.count + 1;
    document.getElementById('dis').innerHTML =
      'HostListner input box focused ' + this.count;
  }
  //------------//@HostBinding and @HostListner//------------//
}

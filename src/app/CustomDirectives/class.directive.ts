import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appClass') set display(value: object) {
    let entries = Object.entries(value);

    for (let item of entries) {
      let [className, condition] = item;
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
      //---------this one method----------
      // if (item[1]) {
      //   this.renderer.addClass(this.element.nativeElement, item[0]);
      // }
      //---------this one method----------
    }
  }
}

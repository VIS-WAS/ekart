import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // -------------//Property in directive//------------------//

  // @Input('setBackground') backColor: string = '#36454f';
  // @Input() textColor: string = 'white';
  @Input() fontWeight: string = '900';

  @Input('setBackground') changeTextAndBackColor: {
    backColor: string;
    textColor: string;
  };
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.changeTextAndBackColor.backColor
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.changeTextAndBackColor.textColor
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'fontWeight',
      this.fontWeight
    );
  }

  // -------------//Property in directive//------------------//
}

import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // -------------//Property in directive//------------------//

  @Input('setBackground') backColor: string = '#36454f';
  @Input() textColor: string = 'white';
  @Input() fontWeight: string = '900';
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.backColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(
      this.element.nativeElement,
      'fontWeight',
      this.fontWeight
    );
  }

  // -------------//Property in directive//------------------//
}

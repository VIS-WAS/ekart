import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282b';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';
  @HostBinding('style.fontWeight') fontWeight: string = 'bold';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.border = '#28282b 2px solid';
    this.textColor = '#28282b';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '#28282b';
    this.border = 'none';
    this.textColor = 'white';
  }
}

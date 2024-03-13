import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element:ElementRef; // this can be shortcutted by using access modifier while passing property to constructor
  // private renderer: Renderer2; //shortcut used
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //this.element = element ;  // shortcut used
    // this.renderer = renderer;// shortcut used
  }
  ngOnInit() {
    // ----------custom attribute basic example ------------//

    // this.element.nativeElement.style.backgroundColor = '#36454f';
    // this.element.nativeElement.style.color = 'white';

    // ----------custom attribute basic example ------------//

    // ----------Renderer2 example ------------//

    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#36454f'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    //  this.renderer.setAttribute(
    //   this.element.nativeElement,
    //   'title',
    //   'this is example title'
    // );
    // ----------Renderer2 example ------------//
  }
}

import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  //------------// @ContentChild() example //-------------//

  @ContentChild('para') paragraphEl: ElementRef;

  styleParagraph() {
    console.log(this.paragraphEl.nativeElement);
  }

  //------------// @ContentChild() example //-------------//
}

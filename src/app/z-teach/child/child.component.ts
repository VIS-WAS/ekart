import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { TopHeaderComponent } from 'src/app/top-header/top-header.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  //------------// @ContentChild()  on componet example //-------------//

  @ContentChild(TopHeaderComponent) topHeader: TopHeaderComponent;

  //------------// @ContentChild() on componet example //-------------//

  //------------// @ContentChildren() example //-------------//
  @ContentChildren('para')
  paraElements: QueryList<ElementRef>;

  styleParagraph() {
    //------------// @ContentChild() on componet example //-------------//

    // console.log(this.topHeader);

    //------------// @ContentChild() on componet example //-------------//

    //------------// @ContentChildren() example //-------------//

    this.paraElements.forEach((el) => {
      // console.log(el.nativeElement);
    });
  }

  //------------// @ContentChildren() example //-------------//
}

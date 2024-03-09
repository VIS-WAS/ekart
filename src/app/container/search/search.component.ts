import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  //------------ Non - related component communication-------------------------

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEL: ElementRef;

  //-------eventEmmiter----//
  // onSearchTextChanged() {
  //   this.searchTextChanged.emit(this.searchText);
  // }

  //-------eventEmmiter----//

  //------------- Non - related component communication-------------------------
  // when you wait for action

  // updateSearch(inputEL: HTMLInputElement) {
  //     this.searchText = inputEL.value;
  //     this.searchTextChanged.emit(this.searchText);
  //   }

  //------------- Non - related component communication-------------------------
  updateSearch() {
    this.searchText = this.searchInputEL.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}

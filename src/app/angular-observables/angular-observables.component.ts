import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  from,
  fromEvent,
  map,
  of,
} from 'rxjs';

@Component({
  selector: 'angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css'],
})
export class AngularObservablesComponent {
  data: any[] = [];
  filterValue: any[] = [];
  pipedValue: any[] = [];
  shothandValue: any[] = [];
  array1 = [1, 3, 5, 7, 9, 11];
  array2 = ['a', 'c', 'd', 'e', 'f'];

  //-----------//shorthand method to apply map and fileter//-------------//

  myObservable = from(this.array1).pipe(
    map((val) => {
      return val * 3;
    }),
    filter((val) => {
      return val % 5 === 0;
    })
  );
  //-----------//shorthand method to apply map and fileter//-------------//

  myObservableValue = from([2, 12, 5, 24, 8, 10]);

  tranformDataObs = this.myObservableValue.pipe(
    map((val) => {
      return val * 5;
    })
  );

  filteredObs = this.myObservableValue.pipe(
    filter((val, i) => {
      console.log(i);
      return val % 4 === 0;
    })
  );

  pipedDataobs = this.myObservableValue.pipe(
    map((val) => {
      return val * 3;
    }),
    filter((val) => {
      return val % 5 === 0;
    })
  );

  GetAsyncData() {
    this.filteredObs.subscribe((val: any) => {
      this.filterValue.push(val);
    });

    this.tranformDataObs.subscribe((val: any) => {
      this.data.push(val);
    });
    this.pipedDataobs.subscribe((val: any) => {
      this.pipedValue.push(val);
    });
    this.myObservable.subscribe((val: any) => {
      this.shothandValue.push(val);
    });
  }
}

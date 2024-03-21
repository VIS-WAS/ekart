import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css'],
})
export class AngularObservablesComponent {
  data: any[] = [];

  //----observable
  myObservable = new Observable((observer) => {
    // observer.next([1, 2, 3, 4, 5, 6]);
    observer.next(9);
    setTimeout(() => {
      observer.next(76);
    }, 1000); // just to demonstrate flow of data
    observer.next(23);
    setTimeout(() => {
      observer.next(88);
    }, 2000);
    observer.next(56);
    setTimeout(() => {
      observer.next(46);
    }, 3000);
    observer.next(13);
  });

  GetAsyncData() {
    //observer
    //next, error, complete
    this.myObservable.subscribe((val: any) => {
      // this.data = val
      this.data.push(val);
    });
  }
}

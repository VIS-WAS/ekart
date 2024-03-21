import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css'],
})
export class AngularObservablesComponent {
  data: any[] = [];
  array1 = [1, 3, 5, 7, 9, 11];
  array2 = ['a', 'c', 'd', 'e', 'f'];

  //----observable

  // ------//using of()//-------//

  // ---   myObservable = of(this.array1, this.array2, 1, 2, 4);

  // ------//using of()//-------//

  // ------//using from()//-------//
  myObservable = from(this.array1);
  // ------//using from()//-------//

  // myObservable = new Observable((observer) => {
  //   observer.next(25);
  //   setTimeout(() => {
  //     observer.next(76);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(96);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(88);
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('something went wrong. Pleaser try again'));
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next(46);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(6);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3000);
  // });

  GetAsyncData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(this.data);
      },

      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All the data transfered successfully');
      },
    });
  }
}

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
    observer.next(25);
    setTimeout(() => {
      observer.next(76);
    }, 1000);
    setTimeout(() => {
      observer.next(96);
    }, 2000);
    setTimeout(() => {
      observer.next(88);
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('something went wrong. Pleaser try again'));
    }, 3000);
    setTimeout(() => {
      observer.next(46);
    }, 4000);
    setTimeout(() => {
      observer.next(6);
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 3000);
  });

  GetAsyncData() {
    //observer
    //next, error, complete
    //----------//below method is depricated to pass callback functions to subscribe------//
    // this.myObservable.subscribe(
    //   (val: any) => {
    //     this.data.push(val);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   () => {
    //     alert('all the transfered successfully');
    //   }
    // );
    //----------//below method is depricated to pass callback functions to subscribe------//

    this.myObservable.subscribe({
      //-----------//below will throw error due to this.data is local to subscribe not outer call
      // next(val: any) {
      //   this.data.push(val);
      // },

      next: (val: any) => {
        this.data.push(val);
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

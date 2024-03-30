import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    //------------//using Promise vs observable//-------------//

    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called'); // called without any subscriber
      resolve(100);
      resolve(200);
      resolve(300);
    });

    promise.then((data) => {
      console.log('promise data', data); // return only 100
    });

    const observe = new Observable((data) => {
      console.log('Observable is called'); // called only when there is subscriber
      data.next(100);
      data.next(200);
      data.next(300);
    });
    observe.subscribe((data) => {
      console.log('observable data ', data); //retrun 100,200,300
    });

    //------------//using  promise vs observable//-------------//
  }
}

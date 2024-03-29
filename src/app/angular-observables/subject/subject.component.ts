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
    //------------//using AsuncSubject//-------------//

    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);

    asyncSubject.complete();
    asyncSubject.next(400); // it will not be called bcz it is called after complete()
    asyncSubject.subscribe((data) => console.log(`Subscriber 1 ${data}`)); //300

    asyncSubject.subscribe((data) => console.log(`Subscriber 2 ${data}`)); //300

    //------------//using  AsyncSubject//-------------//
  }
}

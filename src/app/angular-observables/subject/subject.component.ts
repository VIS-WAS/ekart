import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    //------------//using observer//-------------//

    let obs = new Observable((observer) => {
      observer.next(Math.random());
    });
    //subscriber 1
    obs.subscribe((data) => {
      console.log('Observer 1 ', data);
    });

    //subscriber 2
    obs.subscribe((data) => {
      console.log('Observer 2 ', data);
    });

    //------------//using observer//-------------//

    //------------//using Subject//-------------//

    let sub = new Subject();

    //subscriber 1
    sub.subscribe((data) => {
      console.log('Subject 1 ', data);
    });

    //subscriber 2
    sub.subscribe((data) => {
      console.log('Subject 2 ', data);
    });

    sub.next(Math.random());

    //------------//using Subject//-------------//
  }
}

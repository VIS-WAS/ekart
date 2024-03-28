import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    //------------//using ReplaySubject//-------------//

    const sub = new ReplaySubject(2, 1000);

    // const sub = new Subject();

    sub.next(100);
    sub.next(200);
    sub.next(300);

    //subscriber 1
    sub.subscribe((data) => {
      console.log('Subject 1 ', data); //100,200,300
    });

    //subscriber 2
    sub.subscribe((data) => {
      console.log('Subject 2 ', data); //100,200,300
    });

    sub.next(2020);

    sub.subscribe((data) => {
      console.log('Subject 3 ', data); //100,200,300,2020
    });

    sub.next(2023); //100,200,300,2020,2023

    //------------//using  ReplaySubject//-------------//
  }
}

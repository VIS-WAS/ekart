import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    //------------//using Behavior Subject//-------------//

    let sub = new BehaviorSubject<number>(100);

    //subscriber 1
    sub.subscribe((data) => {
      console.log('Subject 1 ', data); //100
    });

    //subscriber 2
    sub.subscribe((data) => {
      console.log('Subject 2 ', data); //100
    });

    sub.next(2020); //now again it will be 2020 and 2020

    sub.subscribe((data) => {
      console.log('Subject 3 ', data); // here 2020 not 100 bcz last emitted value is 2020
    });

    //------------//using  BehaviorSubject//-------------//
  }
}

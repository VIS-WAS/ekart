import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    //AJAX CALL
    //GET request api of random user
    const data = ajax('https://randomuser.me/api/');

    //creating subject variable
    const subject = new Subject();

    //instead of call back function passing subject. so that we are data consuming as subject
    data.subscribe(subject);

    subject.subscribe((res) => {
      console.log(res);
    });
    subject.subscribe((res) => {
      console.log(res);
    });
    subject.subscribe((res) => {
      console.log(res);
    });
  }
}

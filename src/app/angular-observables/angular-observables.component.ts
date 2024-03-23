import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css'],
})
export class AngularObservablesComponent implements AfterViewInit {
  @ViewChild('createBtn')
  createBtn: ElementRef;

  createBtnObs: Subscription;

  ngAfterViewInit() {
    this.buttonClicked();
  }

  buttonClicked() {
    let count = 0;
    this.createBtnObs = fromEvent(
      this.createBtn.nativeElement,
      'click'
    ).subscribe((data) => {
      console.log(data);
      this.showItem(++count);
    });
  }

  showItem(val) {
    let div = document.createElement('div');
    div.innerText = 'Item ' + val;
    div.className = 'data-list';
    document.getElementById('divContainer').appendChild(div);
  }

  data: any[] = [];
  array1 = [1, 3, 5, 7, 9, 11];
  array2 = ['a', 'c', 'd', 'e', 'f'];

  promiseData = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4, 5, 6]);
  });

  myObservable = from(this.promiseData);

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

import { EventEmitter, Injectable } from '@angular/core';
import {} from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //   createTask: EventEmitter<string> = new EventEmitter<string>();

  createTask = new Subject<string>();

  fromServiceCreateTask(value: string) {
    this.createTask.next(value);
  }
}

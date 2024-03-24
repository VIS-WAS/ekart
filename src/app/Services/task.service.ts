import { EventEmitter, Injectable } from '@angular/core';
import {} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  createTask: EventEmitter<string> = new EventEmitter<string>();

  fromServiceCreateTask(value: string) {
    this.createTask.emit(value);
  }
}

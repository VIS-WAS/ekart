import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  newTask: string = '';

  taskService: TaskService = inject(TaskService);

  onCreateTask() {
    this.taskService.fromServiceCreateTask(this.newTask);
  }
}

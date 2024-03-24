import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['task 1', 'task 2', 'task 3'];
  taskServie: TaskService = inject(TaskService);

  ngOnInit() {
    this.taskServie.createTask.subscribe((value: string) => {
      this.tasks.push(value);
    });
  }
}

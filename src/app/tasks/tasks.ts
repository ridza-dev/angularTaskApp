import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task/task';
import { Taskform } from './taskform/taskform';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, Taskform],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private taskServices: TasksService){}

  get selectedUserTask() {
    return this.taskServices.getUserTasks(this.userId);
  }



  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

 
}

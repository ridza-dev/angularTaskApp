import { Component, inject, Input} from '@angular/core';
import { DatePipe } from '@angular/common';
import { type UserTask } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';
  

@Component({
  selector: 'app-task',
  imports: [Card , DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

  @Input({required: true}) task!: UserTask
  private taskService = inject(TasksService)


  OnCompleteTask(){
   this.taskService.removeTasks(this.task.id)
  }

}

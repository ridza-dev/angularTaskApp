
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-taskform',
  imports: [FormsModule],
  templateUrl: './taskform.html',
  styleUrl: './taskform.css',
})
export class Taskform {

  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredSummary = '';
  enteredTitle = '';
  enteredDate = '';
  private taskService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
   this.taskService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
   },
  this.userId
  )
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-taskform',
  imports: [FormsModule],
  templateUrl: './taskform.html',
  styleUrl: './taskform.css',
})
export class Taskform {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredSummary = '';
  enteredTitle = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}

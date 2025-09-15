import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-taskform',
  imports: [],
  templateUrl: './taskform.html',
  styleUrl: './taskform.css'
})
export class Taskform {

@Output() cancel = new EventEmitter<void>();





  onCancel(){
    this.cancel.emit()
  }

}

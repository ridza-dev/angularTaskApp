import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type UserType } from './user.model';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  ///Zone method
  @Input({ required: true }) user!: UserType;
  @Input({required: true}) selected!: boolean;

  /// these two @Output and output() is the same way of implementing output

  @Output() select = new EventEmitter<string>();

  //select = output<string>();

  ////////////

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  /// Signals method
  /// just a reminder, markup in html must be change to function
  /// if we were to use signal  eg name() and imagePath()
  ///computed and input also have to be imported from @angular/core

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'users/' + this.avatar());



}

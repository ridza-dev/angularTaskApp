import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = signal('first-angular-app');
  selectedUserId? : string;


  get selectedUser (){

    return this.users.find((user)=> user.id === this.selectedUserId);

  }
  
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  // onSelectTasks(name: string) {
  //   name = this.selectedName;
  // }
}

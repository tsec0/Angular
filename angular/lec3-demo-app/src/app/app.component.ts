import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService], // if the component does not exist -> it will not be used only for a single use
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'lec3-demo-app';
  appUsers: User[] = []; // type user collection

  constructor(public userService: UserService){
    this.appUsers = this.userService.users; // type user
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    // control and modifications
    this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.users;
  }
}

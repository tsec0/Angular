import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './type/JSONPlaceholderUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [UserService], // if the component does not exist -> it will not be used only for a single use
})

export class AppComponent implements OnInit {
  title = 'lec3-demo-app';
  appUsers: User[] = []; // type user collection
  isLoading = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users; // type user
  }

  ngOnInit(){
    // PROMISE
    // this.userService.getUsers().then((users) =>  { 
    //   this.appUsers = users;
    //   console.log(users);
    //   this.isLoading = false;
    // });

    this.userService.getUsers().subscribe((users) =>  { 
      this.appUsers = users;
      this.isLoading = false;
    });
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // control and modifications
    this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.users;
  }
}
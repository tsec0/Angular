import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './type/JSONPlaceholderUser';

// omitted because of mocha tests ; but is needed for http client (streams) (observable)
@Injectable({
  providedIn: 'root', // where should the component be injected
})
export class UserService {

  users: User[] = [];

  constructor(private http: HttpClient){
    // setInterval(() => {
    //     this.users.push({
    //       name: 'DemoName',
    //       age: 0,
    //     });

    //     // console.log('User has been added');
    // }, 30000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value),
    // };

    // this.users = [...this.users, user];
    // this.users.push(user);

    inputAge.value = "";
    inputName.value = "";

    // validation to be added

    // ngOnDestry - for cleaning a component (class)

  }

  getUsers() {
    // PROMISE
    // return fetch('https://jsonplaceholder.typicode.com/users')
    // .then((result) => result.json());

    // OBSERVABLE
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

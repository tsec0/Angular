// import { Injectable } from '@angular/core';
import { User } from './type/User';

// omitted because of mocha tests
// @Injectable({
//   providedIn: 'root', // where should the component be injected
// })
export class UserService {

  users: User[] = [ 
    {name: "Ivan", age: 12 },
    {name: "Gragan", age: 13 },
    {name: "Pesho", age: 14 },
    {name: "Ivcho", age: 15 },
  ];

  constructor(){
    setInterval(() => {
        this.users.push({
          name: 'DemoName',
          age: 0,
        });

        console.log('User has been added');
    }, 20000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    // this.users = [...this.users, user];
    this.users.push(user);

    inputAge.value = "";
    inputName.value = "";

    // validation to be added
  }
}

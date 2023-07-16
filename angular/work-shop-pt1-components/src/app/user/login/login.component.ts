import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { // implements OnDestroy {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router){}

  // ngOnDestroy(): void {
  //   console.log("NGONDESTROY INVOKED!")
  //   // throw new Error('Method not implemented.');
  // }

  login(form: NgForm): void {

    console.log(form.value);
    if(form.invalid) return;

    // ToDo: for now the data is handled

    this.userService.login();
    this.router.navigate(['/']);
  }
}

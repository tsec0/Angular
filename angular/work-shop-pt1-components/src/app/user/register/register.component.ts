import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPassValidator } from 'src/app/shared/validators/password-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.formBuilder.group({
    email: ["", 
    [
      Validators.required, 
      appEmailValidator(DEFAULT_EMAIL_DOMAINS)
    ]],
    username: ["", [Validators.required, Validators.minLength(5)]],
    tel: ["telTest"],
    passGroup: this.formBuilder.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required]],
      },
      {
        validators: [matchPassValidator('password', 'rePassword')]
      }),
  });

  constructor(private formBuilder: FormBuilder){}

  register(): void{
    if(this.form.invalid) return;
    
    console.log(this.form.value);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';

interface Profile {
  username: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: Profile | undefined;

  form = this.formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    phone: [""],
  })

  constructor(private formBuilder: FormBuilder) {}

  toggleEditMode(): void{
    this.isEditMode = !this.isEditMode
  }

  saveProfileHandler():void {
    if(this.form.invalid)return;

    this.profileDetails = { ...this.form.value } as Profile;

    this.toggleEditMode();
  }

}

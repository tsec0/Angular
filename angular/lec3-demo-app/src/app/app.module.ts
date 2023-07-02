import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService ], // imported for mocha test, injected in the app module
  bootstrap: [AppComponent]
})
export class AppModule { }

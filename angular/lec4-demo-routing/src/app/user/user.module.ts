import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolver } from './user-detail/user-detail.resolver';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'user/list', 
        component: UserListComponent,
      },
      {
        path: 'user/detail/:id',
        resolve: { user: UserResolver },
        component: UserDetailComponent,
      },
    ]),
  ],
  exports: [
    UserListComponent,
  ]
})
export class UserModule { }
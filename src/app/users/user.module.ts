import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './add-user/add-user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as $ from 'jquery'

@NgModule({
  declarations: [UserListComponent,UserComponent,UserHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[UserComponent,UserHomeComponent]
})
export class UserModule { }

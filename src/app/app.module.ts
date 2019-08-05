import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import {  RouterModule } from '@angular/router';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UserHomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"addUser", component: AddUserComponent},
      { path:"UserList", component: UserListComponent},
      { path:"users", component: UserHomeComponent},
      { path:"home", component: DashboardComponent},
      { path:"**", redirectTo:"/home"},
    ]),
      FormsModule,
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

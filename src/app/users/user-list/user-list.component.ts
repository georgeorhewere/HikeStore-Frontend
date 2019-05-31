import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service'
import {User} from "../../model/user";
import { isObservable } from 'rxjs'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private app_users:User[]
  constructor(private service:UserService) {

  }

  ngOnInit() {

    if(isObservable(this.service.getUsers())) {
      this.service.getUsers().subscribe((data) => {
        this.app_users = data;
      })
    }else { this.app_users = [];}
  }

  get users():User[]{
    return this.app_users;
  }

}

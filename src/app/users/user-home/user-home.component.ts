import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from '../../models/repository/user.repository.service';
import {User} from "../../models/user";
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  selectedUser: Observable<User>;

  constructor(public service: UserRepositoryService) {

  }

  ngOnInit() {
    this.selectedUser = from([new User()]);
  }

  addUser(user: User){
    this.service.addUser(user);
  }

  editUser(id:number){
    console.log(id)
    this.selectedUser = from([this.service.getUser(id)]);
    console.log(this.selectedUser)
  }
  deleteUser(id:number){
    this.service.deleteUser(id)
    //console.log(this.selectedUser)
  }





}

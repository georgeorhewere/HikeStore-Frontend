import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from '../../services/user-service.service'
import {User} from "../../models/user";
import { isObservable } from 'rxjs'
import {UserRepositoryService} from "../../models/repository/user.repository.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private app_users: User[];

  @Input("model")
  dataModel: UserRepositoryService;

  @Output("editUser")
  editUserEvent = new EventEmitter<number>();

  @Output("deleteUser")
  deleteUserEvent = new EventEmitter<number>();


  constructor( ) {
    //this.dataModel.getUsers()

  }

  ngOnInit() {


  }


  getUser(key: number): User {
     return this.dataModel.getUser(key);
  }

  getUsers(): User[] 
  {
   console.log("get users") 
    return this.dataModel.getUsers();
  }


  editUser(userId: number)
  {
    this.editUserEvent.emit(userId);
  }

  deleteUser(userId: number)
  {
    this.deleteUserEvent.emit(userId);
  }

  showTable: boolean = true;

}

import { Injectable } from '@angular/core';
import { StoreDBService } from '../datasource/storedb.service';
import {User} from '../../models/user';
import { StaticdbService } from '../datasource/staticdb.service';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  private users: User[] = [];
   constructor(private db:StaticdbService )
   {
     db.getUsers().subscribe((data) => {
       this.users = data;
     });
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    return this.db.addUser(user).subscribe(u => this.users.push(u));
  }

  getUser(id:number):User{
     return this.users.find(u => u.id == id);
  }

  deleteUser(id:number){
     this.db.deleteUser(id);     
     this.db.getUsers().subscribe((data) => {
      this.users = data;
    });
      console.log("update the delete list");
     
  }




}

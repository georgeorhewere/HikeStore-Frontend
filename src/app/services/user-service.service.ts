import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private users: User[] = [
      new User(1, "George", "West", "george.west@druids.com"),
      new User(2,"Jude","Law","jude.law@druids.com"),
      new User(3,"Grace","Jones","grace.jones@druids.com"),
      new User(4,"Zainab","Aliyu","zainab.aliyu@druids.com"),
      new User(5,"Sam","Walton","sam.walton@druids.com"),
      new User(6,"Faith","Racheal","faith.racheal@druids.com")
  ]

  constructor() { }


  getUsers(): Observable<User[]>{
    return from([this.users]);
  }

}

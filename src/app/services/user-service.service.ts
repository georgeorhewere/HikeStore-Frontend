import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private users: User[] = [
      new User(1,"George","West","george.west@druids.com","08168796960"),
      new User(2,"Jude","Law","jude.law@druids.com","09116755532"),
      new User(3,"Grace","Jones","grace.jones@druids.com","08025086610"),
      new User(4,"Zainab","Aliyu","zainab.aliyu@druids.com","07043252521"),
      new User(5,"Sam","Walton","sam.walton@druids.com","07092900112"),
      new User(6,"Faith","Racheal","faith.racheal@druids.com","09087733228")
  ]

  constructor() { }


  getUsers():Observable<User[]>{
    return from([this.users])
  }

}

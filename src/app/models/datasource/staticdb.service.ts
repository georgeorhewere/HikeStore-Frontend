import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StoreDBService } from './storedb.service';

@Injectable({
  providedIn: 'root'
})

export class StaticdbService extends StoreDBService {

  PROTOCOL: string;
  PORT: number;
  baseUrl: string;

  private counter: number;


  private users: User[] = [];

  getUsers(): Observable<User[]> {
    return from([this.users]);
  }
  addUser(user: User): Observable<User> {

    // validate userId
    this.counter++;
    user.userId = this.counter;
    this.users.push(user);
    return from([user]);
  }
  getUser(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: number) {
    const user = this.users.filter(usr => usr.userId === id)[0];

    if (user != null) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  getOptions() {
    return super.getOptions();
  }

  updateUser(user: User): any {

  }
  constructor(http: HttpClient) {
      super(http);

      this.users = new Array<User>( new User(1, 'Kenny', 'Rogers', 'kennyrg@gmail.com'),
      new User(2, 'Barry', 'White', 'barryr@gmail.com') ,
      new User(3, 'Jane', 'Fonda', 'janefonda@gmail.com'),
      new User(4, 'Sam', 'Etto', 'sametto@gmail.com')
      , new User(5, 'Adam', 'Sandler', 'adamsandler@gmail.com')
      , new User(6, 'Olivia', 'stone', 'oliviastone@gmail.com')
      );


      this.counter = this.users[this.users.length - 1].userId + 1;
  }
}



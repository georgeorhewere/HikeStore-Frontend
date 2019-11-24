import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../user';
import { HttpHeaders } from '@angular/common/http';
import { IConnectionService } from './iconnection';
import { environment } from 'src/environments/environment';
import { Product } from '../product';
import { IAddUser } from '../users/iuser';



// const PROTOCOL = 'https';
// const PORT = 44338;

@Injectable({
  providedIn: 'root'
})
export class StoreDBService implements IConnectionService {

  public baseUrl: string;
  public PROTOCOL = 'http';
  public PORT = 89;
  /*auth_token: string;*/
  client: HttpClient;

  constructor(http: HttpClient) {
    this.baseUrl = `${this.PROTOCOL}://${environment.apiUrl}/api/`;
    // this.baseUrl = `${this.PROTOCOL}://${location.hostname}:${this.PORT}/api/`;
    this.client = http;
  }

  getUsers(): Observable<User[]> {

    return this.client.get<User[]>(this.baseUrl + 'users');
  }

  addUser(user: User): Observable<User> {
    return this.client.post<User>(this.baseUrl + 'users', user);
  }

  updateUser(user: User): any {
    return $.ajax({
      url: this.baseUrl + 'users/' + user.userId,
      data: JSON.stringify(user),
      headers: { 'content-type': 'application/json' },
      type: 'PUT',
      success: function (result) {
        // Do something with the result
        console.log('updated ' + user.userId);

      }
    });
    // return this.http.put<User>(this.baseUrl + 'users', user);
  }
  getUser(id: number): Observable<User> {

    return this.client.get<User>(this.baseUrl + 'users/' + id);
  }

  deleteUser(id: number): any {
    return $.ajax({
      url: this.baseUrl + 'users/' + id,
      type: 'DELETE',
      success: function (result) {
        // Do something with the result
        console.log('deleted ' + id);

      }
    });

  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(this.baseUrl + 'products', this.getOptions());
  }

  addProduct(product: Product): Observable<Product> {

    return this.client.post<Product>(this.baseUrl + 'products', product);
  }


  // Authorization
  registerUser(user: IAddUser): Observable<IAddUser> {
    return this.client.post<IAddUser>(this.baseUrl + 'auth/register', user);
  }


}

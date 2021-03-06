import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StoreDBService } from './storedb.service';
import { Product } from '../product';
import { IServiceResult } from '../repository/iservice-result';

@Injectable({
  providedIn: 'root'
})

export class StaticdbService extends StoreDBService {

  PROTOCOL: string;
  PORT: number;
  baseUrl: string;

  private counter: number;


  private users: User[] = [];
  private products: Product[] = [];

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

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
  setProducts(products: Product[]) {
    this.products = products;
  }

  addProduct(product: Product): Observable<IServiceResult>{
    this.products.push(product);
    return from([ { success: true, data: product , message:''} ]);
  }

  private initialize() {
    this.products = new Array<Product>(
      new Product('Co-op Half Dome 2 Plus Tent', 40000, 6, 1, 'Backpacking Tents', 'blue'),
      new Product('Black Diamond Credo Pants', 4000, 12, 1, 'Men', 'blue'),
      new Product('Arcteryx - Norvan LD GTX', 5600, 65, 1, 'Shoes', 'blue'),
      new Product('Patagonia - P-6 Logo Responsibili-Tee - Men\'s', 5000, 64, 1, 'Men', 'blue'),
      new Product('Topo Athletic - Terraventure 2 - Men\'s', 20000, 45, 1, 'Shoes', 'blue'),
      new Product('Mountain Hardwear - Superforma Jacket', 8000, 5, 1, 'Jacket', 'black'),
      new Product('Black Diamond - Crag Tee - Men\'s', 5000, 33, 1, 'T-Shirts', 'red'),
      new Product('Meridian Line - Hip Bear Tee', 5000, 10, 1, 'T-Shirts', 'grey'),
      new Product('Black Diamond - Crag Tee - Men\'s', 5000, 18, 1, 'T-Shirts', 'green'),
      new Product('Outdoor Research - Ferrosi Shirt Jacket - Men', 16000, 52, 1, 'Jacket', 'grey'),
      new Product('Mountain Hardwear - Kor Strata Jacket - Men', 15000, 45, 1, 'Jacket', 'blue'),
      new Product('Nalgene Ultralite Wide-Mouth', 3000, 45, 1, 'Water Bottle - 32 fl. oz.', 'blue'),
      new Product('Hydro Flask Standard-Mouth', 20000, 45, 1, ' Water Bottle with Flex Cap - 24 fl. oz.', 'white'),
      new Product('REI Co-op Nalgene Wide-Mouth', 20000, 45, 1, 'Water Bottle - 48 fl. oz.', 'blue'),
    );
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
      this.initialize();
  }
}



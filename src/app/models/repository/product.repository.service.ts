import { Injectable } from '@angular/core';
import { StoreDBService } from '../datasource/storedb.service';
import { IStoreInterface } from './istore.interface';
import { Product } from '../product';
import { Paginator } from 'src/app/components/utilities/paginator';
import { Observable } from 'rxjs';
import { IServiceResult } from './iservice-result';


@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService implements IStoreInterface<Product> {
  paginator: Paginator<Product>;
  private _products: Product[] = [];


  constructor(private db: StoreDBService) {
    this.load();
  }

  list(): Product[] {
    
    return this._products;
  }

  add(instance: Product): Observable<IServiceResult> {
    
    return this.db.addProduct(instance);
    
  }
  update(instance: Product): void {
    throw new Error('Method not implemented.');
  }
  load() {
    this.db.getProducts().subscribe((productList) => {
      console.log(productList)
      this._products = productList;
    });
    this.paginator = new Paginator<Product>(this._products, 5);
  }

  delete(id: number): boolean {
    throw new Error('Method not implemented.');
  }
  get(id: number): Product {
    throw new Error('Method not implemented.');
  }


}

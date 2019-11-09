import { Injectable } from '@angular/core';
import { StoreDBService } from '../datasource/storedb.service';
import { IStoreInterface } from './istore.interface';
import { Product } from '../product';
import { Paginator } from 'src/app/components/utilities/paginator';


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

  add(instance: Product): number {
    let id;
    this.db.addProduct(instance).subscribe((c) => {
      this._products.push(c);//id = c.productId;
    });
    return 0;
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

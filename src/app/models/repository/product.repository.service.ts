import { Injectable } from '@angular/core';
import { StoreDBService } from '../datasource/storedb.service';
import { IStoreInterface } from './istore.interface';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService implements IStoreInterface<Product> {
  
  constructor(private db: StoreDBService) {

  }
  
  list(): Product[] {
    throw new Error('Method not implemented.');
  }
  add(instance: Product): number {
    throw new Error('Method not implemented.');
  }
  update(instance: Product): void {
    throw new Error('Method not implemented.');
  }
  load(): boolean {
    throw new Error('Method not implemented.');
  }
  delete(id: number): boolean {
    throw new Error('Method not implemented.');
  }
  get(id: number): Product {
    throw new Error('Method not implemented.');
  }

  
}

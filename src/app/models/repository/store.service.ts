import { Injectable } from '@angular/core';
import { StoreDBService } from '../datasource/storedb.service';
import { UserRepositoryService } from './user.repository.service';
import { ProductRepositoryService } from './product.repository.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
userRepository: UserRepositoryService;
productRepository: ProductRepositoryService;

  constructor(private db: StoreDBService) {
    this.userRepository = new UserRepositoryService(db);
    this.productRepository = new ProductRepositoryService(db);

   }
}

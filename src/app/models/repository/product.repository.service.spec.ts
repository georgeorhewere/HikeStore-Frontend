import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from '../datasource/staticdb.service';
import { ProductRepositoryService } from './product.repository.service';


describe('Product.RepositoryService', () => {
  let client: HttpClient;
  const db: StaticdbService = new StaticdbService(client);
  const service: ProductRepositoryService = new ProductRepositoryService(db);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ProductRepositoryService, useValue: service
      },
    ]

  }));

  it('should be created', () => {
    const service: ProductRepositoryService = TestBed.get(ProductRepositoryService);
    expect(service).toBeTruthy();
  });

  describe('List Products', () =>
  {
    it('should return list of products', () => {
      const service: ProductRepositoryService = TestBed.get(ProductRepositoryService);
      expect(service.list()).toBeDefined('should return an instance');
      expect(service.list().length).toEqual(5);
    });
  });



});

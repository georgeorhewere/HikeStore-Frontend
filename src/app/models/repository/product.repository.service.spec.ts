import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from '../datasource/staticdb.service';
import { ProductRepositoryService } from './product.repository.service';


describe('Product.RepositoryService', () => {
  let client: HttpClient;
  const db: StaticdbService = new StaticdbService(client);
  // const service: ProductRepositoryService = new ProductRepositoryService(db);
  let service: ProductRepositoryService;


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ProductRepositoryService, useValue: new ProductRepositoryService(db)
      },
    ]

  }));
  beforeEach(() => {
    service = TestBed.get(ProductRepositoryService);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('List Products', () => {
    it('should return list of products', () => {
      expect(service.list()).toBeDefined('should return an instance');
      expect(service.list().length).toEqual(5);
    });
  });

  describe('Products - Pages', () => {
    it('should return page count', () => {
      expect(service.paginator.pageCount()).toBeDefined();
      expect(service.paginator.pageCount()).toBeGreaterThanOrEqual(1);
    });

    it('should return item count', () => {
      expect(service.paginator.itemCount()).toBeDefined('should have an instance');
      expect(service.paginator.itemCount()).toEqual(jasmine.any(Number));
    });

    it('should return page item count ', () => {
        expect(service.paginator.pageItemCount(1)).toBeDefined('should have an instance');
        expect(service.paginator.pageItemCount(1)).toEqual(4);        
    });

    // it('should ',()=>{ });
    // it('should ',()=>{ });
    // test edge 0,1,2...max, max -1 , max + 1


  });


});

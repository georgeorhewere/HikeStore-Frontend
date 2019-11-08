import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from '../datasource/staticdb.service';
import { ProductRepositoryService } from './product.repository.service';
import { Paginator } from 'src/app/components/utilities/paginator';
import { Product } from '../product';


describe('Product.RepositoryService', () => {
  let client: HttpClient;
  const db: StaticdbService = new StaticdbService(client);
  let service: ProductRepositoryService = new ProductRepositoryService(db);
  //let service: ProductRepositoryService;


  beforeEach(() => TestBed.configureTestingModule({
    //imort http client

    providers: [

      {
        provide: ProductRepositoryService, useValue: service
      },
      {
        provide: HttpClient, useValue: client
      },

    ]

  }));

  beforeEach(() => {
    service = TestBed.get(ProductRepositoryService);
    service.paginator = new Paginator<Product>(service.list(), 5);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //nested list

  describe('List Products', () => {
    it('should return list of products', () => {
      expect(service.list()).toBeDefined('should return an instance');
      expect(service.list().length).toEqual(14);
    });
  });

  //nested pages
  describe('Products - Pages', () => {

    it('should return page count', () => {
      expect(service.paginator.pageCount()).toBeDefined();
      expect(service.paginator.pageCount()).toBeGreaterThanOrEqual(1);
    });

    it('should have an instance', () => {
      expect(service.paginator.itemCount()).toBeDefined('should have an instance');
    });

    it('should return number of page items', () => {
      expect(service.paginator.pageItemCount(0)).toBeDefined('should return number of item on page - 14 ');
      expect(service.paginator.pageItemCount(0)).toEqual(5);
    });


    // it('should ',()=>{ });
    // it('should ',()=>{ });
    // test edge 0,1,2...max, max -1 , max + 1


  });


});

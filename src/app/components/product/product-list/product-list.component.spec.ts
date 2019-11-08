import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from 'src/app/models/datasource/staticdb.service';
import { ProductRepositoryService } from 'src/app/models/repository/product.repository.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Paginator } from '../../utilities/paginator';
import { Product } from 'src/app/models/product';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  let client: HttpClient;
  let db: StaticdbService = new StaticdbService(client);

  let service: ProductRepositoryService = new ProductRepositoryService(db);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductListComponent],
      providers: [
        {
          provide: HttpClient, useValue: client
        },
        {
          provide: ProductRepositoryService, useValue: service
        },

      ]
    })
      .compileComponents();
  }));

  //set uo component 
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //set up service
  beforeEach(() => {
    service = TestBed.get(ProductRepositoryService);
    service.load();
    service.paginator = new Paginator<Product>(service.list(), 5);

    component.productList = service.list();
    component.paginator = service.paginator;


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

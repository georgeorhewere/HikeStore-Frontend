import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomeComponent } from './product-home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from 'src/app/models/datasource/staticdb.service';
import { ProductRepositoryService } from 'src/app/models/repository/product.repository.service';
import { Paginator } from '../../utilities/paginator';
import { Product } from 'src/app/models/product';

describe('ProductHomeComponent', () => {
  // set up test conditions
  let component: ProductHomeComponent;
  let fixture: ComponentFixture<ProductHomeComponent>;

  //db and client service
  let client: HttpClient;
  let db: StaticdbService = new StaticdbService(client);

  //db model service
  let service: ProductRepositoryService = new ProductRepositoryService(db);


  // enviroment before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductHomeComponent, ProductListComponent],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHomeComponent);
    component = fixture.componentInstance;
    
    service = TestBed.get(ProductRepositoryService);

    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

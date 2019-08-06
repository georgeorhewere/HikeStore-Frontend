import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { StoreDBService } from './storedb.service';

describe('StoredbService', () => {
  /* beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClient ]
  })); */
  let service:HttpClient;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({    
   providers:[ {provide: HttpClient, useValue: service }]    
    })
    .compileComponents();
  }));
  it('should be created', () => {
    const service: StoreDBService = TestBed.get(StoreDBService);
    expect(service).toBeTruthy();
  });
});

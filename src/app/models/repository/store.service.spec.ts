import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

import { StaticdbService } from '../datasource/staticdb.service';
import { HttpClient } from '@angular/common/http';

describe('StoreserviceService', () => {
  let client: HttpClient;
  const db: StaticdbService = new StaticdbService(client);
 
  beforeEach(() => TestBed.configureTestingModule({

    providers: [
      
      {
        provide: StaticdbService, useValue: db
      },
      {
        provide: HttpClient, useValue: client
      },
      
    ]
  }));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });
});

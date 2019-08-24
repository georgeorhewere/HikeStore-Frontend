import { TestBed } from '@angular/core/testing';

import { StaticdbService } from './staticdb.service';
import { HttpClient } from '@angular/common/http';

describe('StaticdbService', () => {
  let service:HttpClient;

  let staticdb = new StaticdbService(service);
  
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ { provide: HttpClient, useValue: service },
      {provide: StaticdbService, useValue: staticdb }

    ] 
  }));

  it('should be created', () => {
    const service: StaticdbService = TestBed.get(StaticdbService);
    expect(service).toBeTruthy();
  });
});

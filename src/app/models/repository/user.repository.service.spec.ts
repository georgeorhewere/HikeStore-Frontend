import { TestBed } from '@angular/core/testing';

import { UserRepositoryService } from './user.repository.service';
import { HttpClient } from '@angular/common/http';
import { StaticdbService } from '../datasource/staticdb.service';

describe('User.RepositoryService', () => {
  let client: HttpClient;
  
  let db:StaticdbService = new StaticdbService(client);
  let service:UserRepositoryService = new UserRepositoryService(db) ;


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { 
      provide: UserRepositoryService, useValue: service},
      ]
  }));

  it('should be created', () => {
    const service: UserRepositoryService = TestBed.get(UserRepositoryService);
    expect(service).toBeTruthy();
  });
});

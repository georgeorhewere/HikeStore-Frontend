import { TestBed } from '@angular/core/testing';

import { StoreDBService } from './storedb.service';

describe('StoredbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreDBService = TestBed.get(StoreDBService);
    expect(service).toBeTruthy();
  });
});

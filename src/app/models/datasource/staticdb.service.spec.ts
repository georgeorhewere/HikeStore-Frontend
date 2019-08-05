import { TestBed } from '@angular/core/testing';

import { StaticdbService } from './staticdb.service';

describe('StaticdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticdbService = TestBed.get(StaticdbService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './inmemory-data.service';

describe('InmemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SearchByService } from './search-by.service';

describe('SearchByService', () => {
  let service: SearchByService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

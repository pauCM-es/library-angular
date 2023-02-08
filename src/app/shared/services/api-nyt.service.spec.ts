import { TestBed } from '@angular/core/testing';

import { ApiNytService } from './api-nyt.service';

describe('ApiNytService', () => {
  let service: ApiNytService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNytService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

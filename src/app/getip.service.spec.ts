import { TestBed } from '@angular/core/testing';

import { GetipService } from './getip.service';

describe('GetipService', () => {
  let service: GetipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

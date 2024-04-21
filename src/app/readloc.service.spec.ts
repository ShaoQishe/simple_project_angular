import { TestBed } from '@angular/core/testing';

import { ReadlocService } from './readloc.service';

describe('ReadlocService', () => {
  let service: ReadlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

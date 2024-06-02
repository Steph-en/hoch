import { TestBed } from '@angular/core/testing';

import { HochService } from './hoch.service';

describe('HochService', () => {
  let service: HochService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HochService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BrothService } from './broth.service';

describe('BrothService', () => {
  let service: BrothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

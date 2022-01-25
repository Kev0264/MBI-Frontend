import { TestBed } from '@angular/core/testing';

import { MbiService } from './mbi.service';

describe('MbiService', () => {
  let service: MbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

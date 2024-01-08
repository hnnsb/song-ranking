import { TestBed } from '@angular/core/testing';

import { PckeService } from './pcke.service';

describe('PckeService', () => {
  let service: PckeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PckeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

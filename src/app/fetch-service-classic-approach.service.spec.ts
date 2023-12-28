import { TestBed } from '@angular/core/testing';

import { FetchServiceClassicApproachService } from './fetch-service-classic-approach.service';

describe('FetchServiceClassicApproachService', () => {
  let service: FetchServiceClassicApproachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchServiceClassicApproachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

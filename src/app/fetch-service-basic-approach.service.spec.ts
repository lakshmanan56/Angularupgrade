import { TestBed } from '@angular/core/testing';

import { FetchServiceBasicApproachService } from './fetch-service-basic-approach.service';

describe('FetchServiceBasicApproachService', () => {
  let service: FetchServiceBasicApproachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchServiceBasicApproachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

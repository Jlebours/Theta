import { TestBed } from '@angular/core/testing';

import { ThetaAPIService } from './theta-api.service';

describe('ThetaAPIService', () => {
  let service: ThetaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThetaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

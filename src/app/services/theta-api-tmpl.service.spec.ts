import { TestBed } from '@angular/core/testing';

import { ThetaAPITmplService } from './theta-api-tmpl.service';

describe('ThetaApiTmplService', () => {
  let service: ThetaAPITmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThetaAPITmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

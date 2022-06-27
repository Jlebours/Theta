import { TestBed } from '@angular/core/testing';

import { DeviceResolver } from './device.resolver';

describe('DeviceResolver', () => {
  let resolver: DeviceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DeviceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

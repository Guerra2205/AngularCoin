import { TestBed } from '@angular/core/testing';

import { ServicesCurrency } from './services.currency';

describe('ServicesCurrency', () => {
  let service: ServicesCurrency;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCurrency);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

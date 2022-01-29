import { TestBed } from '@angular/core/testing';

import { CarsServicesService } from './cars-services.service';

describe('CarsServicesService', () => {
  let service: CarsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

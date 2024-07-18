import { TestBed } from '@angular/core/testing';

import { LifeServiceService } from './life-service.service';

describe('LifeServiceService', () => {
  let service: LifeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataCompaniesService } from './data-companies.service';

describe('DataCompaniesService', () => {
  let service: DataCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

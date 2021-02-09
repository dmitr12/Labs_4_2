import { TestBed } from '@angular/core/testing';

import { DataStudentService } from './data-student.service';

describe('DataStudentService', () => {
  let service: DataStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

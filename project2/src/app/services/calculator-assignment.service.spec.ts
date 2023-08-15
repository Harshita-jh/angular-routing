import { TestBed } from '@angular/core/testing';

import { CalculatorAssignmentService } from './calculator-assignment.service';

describe('CalculatorAssignmentService', () => {
  let service: CalculatorAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

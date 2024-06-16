import { TestBed } from '@angular/core/testing';

import { SubcriptionService } from './subcription.service';

describe('SubcriptionService', () => {
  let service: SubcriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

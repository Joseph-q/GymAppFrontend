import { TestBed } from '@angular/core/testing';

import { RecoverPasswordService } from './recover-password.service';

describe('RecoverPasswordService', () => {
  let service: RecoverPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

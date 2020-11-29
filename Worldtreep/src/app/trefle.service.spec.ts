import { TestBed } from '@angular/core/testing';

import { TrefleService } from './trefle.service';

describe('TrefleService', () => {
  let service: TrefleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrefleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FireTvService } from './firestore-tv.service';

describe('FireTvService', () => {
  let service: FireTvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireTvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

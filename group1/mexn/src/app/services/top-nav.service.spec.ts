import { TestBed } from '@angular/core/testing';

import { TopNavService } from './top-nav.service';

describe('TopNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopNavService = TestBed.get(TopNavService);
    expect(service).toBeTruthy();
  });
});

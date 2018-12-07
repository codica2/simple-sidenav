import { TestBed } from '@angular/core/testing';

import { SimpleSidenavService } from './simple-sidenav.service';

describe('SimpleSidenavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleSidenavService = TestBed.get(SimpleSidenavService);
    expect(service).toBeTruthy();
  });
});

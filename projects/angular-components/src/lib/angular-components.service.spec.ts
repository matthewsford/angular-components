import { TestBed } from '@angular/core/testing';

import { AngularComponentsService } from './angular-components.service';

describe('AngularComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularComponentsService = TestBed.get(AngularComponentsService);
    expect(service).toBeTruthy();
  });
});

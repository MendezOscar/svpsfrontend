import { TestBed } from '@angular/core/testing';

import { PlanillaService } from './planilla.service';

describe('PlanillaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanillaService = TestBed.get(PlanillaService);
    expect(service).toBeTruthy();
  });
});

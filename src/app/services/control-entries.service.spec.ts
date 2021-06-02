import { TestBed } from '@angular/core/testing';

import { ControlEntriesService } from './control-entries.service';

describe('ControlEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlEntriesService = TestBed.get(ControlEntriesService);
    expect(service).toBeTruthy();
  });
});

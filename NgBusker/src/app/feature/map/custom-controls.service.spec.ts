import { TestBed } from '@angular/core/testing';

import { CustomControlsService } from './custom-controls.service';

describe('CustomControlsService', () => {
  let service: CustomControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

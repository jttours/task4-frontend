import { TestBed } from '@angular/core/testing';

import { SampleModelService } from './sample-model.service';

describe('SampleModelService', () => {
  let service: SampleModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

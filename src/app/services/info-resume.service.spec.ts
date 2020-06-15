import { TestBed } from '@angular/core/testing';

import { InfoResumeService } from './info-resume.service';

describe('InfoResumeService', () => {
  let service: InfoResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

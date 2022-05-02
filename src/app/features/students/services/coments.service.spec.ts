import { TestBed } from '@angular/core/testing';

import { ComentsService } from './coments.service';

describe('StudentsService', () => {
  let service: ComentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

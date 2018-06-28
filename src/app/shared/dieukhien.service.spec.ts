import { TestBed, inject } from '@angular/core/testing';

import { DieukhienService } from './dieukhien.service';

describe('DieukhienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DieukhienService]
    });
  });

  it('should be created', inject([DieukhienService], (service: DieukhienService) => {
    expect(service).toBeTruthy();
  }));
});

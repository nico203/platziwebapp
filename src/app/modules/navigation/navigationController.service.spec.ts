import { TestBed, inject } from '@angular/core/testing';

import { NavigationControllerService } from './navigationController.service';

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationControllerService]
    });
  });

  it('should be created', inject([NavigationControllerService], (service: NavigationControllerService) => {
    expect(service).toBeTruthy();
  }));
});

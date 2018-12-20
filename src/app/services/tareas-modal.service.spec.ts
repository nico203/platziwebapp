import { TestBed, inject } from '@angular/core/testing';

import { TareasModalService } from './tareas-modal.service';

describe('TareasModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasModalService]
    });
  });

  it('should be created', inject([TareasModalService], (service: TareasModalService) => {
    expect(service).toBeTruthy();
  }));
});

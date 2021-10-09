import { TestBed } from '@angular/core/testing';

import { DataParaActualizarService } from './data-para-actualizar.service';

describe('DataParaActualizarService', () => {
  let service: DataParaActualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataParaActualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

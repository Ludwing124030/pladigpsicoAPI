import { TestBed } from '@angular/core/testing';

import { ValidarSesionService } from './validar-sesion.service';

describe('ValidarSesionService', () => {
  let service: ValidarSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaActualizarComponent } from './respuesta-actualizar.component';

describe('RespuestaActualizarComponent', () => {
  let component: RespuestaActualizarComponent;
  let fixture: ComponentFixture<RespuestaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

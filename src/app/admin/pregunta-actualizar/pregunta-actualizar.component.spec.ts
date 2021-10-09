import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaActualizarComponent } from './pregunta-actualizar.component';

describe('PreguntaActualizarComponent', () => {
  let component: PreguntaActualizarComponent;
  let fixture: ComponentFixture<PreguntaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

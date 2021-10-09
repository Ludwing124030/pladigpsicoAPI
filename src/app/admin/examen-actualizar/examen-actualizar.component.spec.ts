import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenActualizarComponent } from './examen-actualizar.component';

describe('ExamenActualizarComponent', () => {
  let component: ExamenActualizarComponent;
  let fixture: ComponentFixture<ExamenActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

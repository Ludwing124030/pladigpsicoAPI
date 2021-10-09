import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCrearComponent } from './pregunta-crear.component';

describe('PreguntaCrearComponent', () => {
  let component: PreguntaCrearComponent;
  let fixture: ComponentFixture<PreguntaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

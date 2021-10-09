import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaCrearComponent } from './respuesta-crear.component';

describe('RespuestaCrearComponent', () => {
  let component: RespuestaCrearComponent;
  let fixture: ComponentFixture<RespuestaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

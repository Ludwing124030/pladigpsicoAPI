import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenCrearComponent } from './examen-crear.component';

describe('ExamenCrearComponent', () => {
  let component: ExamenCrearComponent;
  let fixture: ComponentFixture<ExamenCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

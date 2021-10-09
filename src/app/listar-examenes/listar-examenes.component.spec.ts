import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExamenesComponent } from './listar-examenes.component';

describe('ListarExamenesComponent', () => {
  let component: ListarExamenesComponent;
  let fixture: ComponentFixture<ListarExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

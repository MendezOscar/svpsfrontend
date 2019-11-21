import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosporpuestoComponent } from './empleadosporpuesto.component';

describe('EmpleadosporpuestoComponent', () => {
  let component: EmpleadosporpuestoComponent;
  let fixture: ComponentFixture<EmpleadosporpuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosporpuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosporpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

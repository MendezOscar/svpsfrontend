import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosporsalarioComponent } from './empleadosporsalario.component';

describe('EmpleadosporsalarioComponent', () => {
  let component: EmpleadosporsalarioComponent;
  let fixture: ComponentFixture<EmpleadosporsalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosporsalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosporsalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

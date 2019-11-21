import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosporsexoComponent } from './empleadosporsexo.component';

describe('EmpleadosporsexoComponent', () => {
  let component: EmpleadosporsexoComponent;
  let fixture: ComponentFixture<EmpleadosporsexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosporsexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosporsexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

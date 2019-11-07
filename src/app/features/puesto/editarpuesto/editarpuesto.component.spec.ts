import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpuestoComponent } from './editarpuesto.component';

describe('EditarpuestoComponent', () => {
  let component: EditarpuestoComponent;
  let fixture: ComponentFixture<EditarpuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

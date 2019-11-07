import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpuestoComponent } from './crearpuesto.component';

describe('CrearpuestoComponent', () => {
  let component: CrearpuestoComponent;
  let fixture: ComponentFixture<CrearpuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

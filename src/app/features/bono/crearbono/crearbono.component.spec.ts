import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearbonoComponent } from './crearbono.component';

describe('CrearbonoComponent', () => {
  let component: CrearbonoComponent;
  let fixture: ComponentFixture<CrearbonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearbonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

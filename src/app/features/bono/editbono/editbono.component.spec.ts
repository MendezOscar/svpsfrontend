import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbonoComponent } from './editbono.component';

describe('EditbonoComponent', () => {
  let component: EditbonoComponent;
  let fixture: ComponentFixture<EditbonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

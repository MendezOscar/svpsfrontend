import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarusersComponent } from './editarusers.component';

describe('EditarusersComponent', () => {
  let component: EditarusersComponent;
  let fixture: ComponentFixture<EditarusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

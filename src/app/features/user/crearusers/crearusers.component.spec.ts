import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearusersComponent } from './crearusers.component';

describe('CrearusersComponent', () => {
  let component: CrearusersComponent;
  let fixture: ComponentFixture<CrearusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

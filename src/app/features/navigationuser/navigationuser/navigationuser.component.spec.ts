import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationuserComponent } from './navigationuser.component';

describe('NavigationuserComponent', () => {
  let component: NavigationuserComponent;
  let fixture: ComponentFixture<NavigationuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

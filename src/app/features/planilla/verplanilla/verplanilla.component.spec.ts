import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerplanillaComponent } from './verplanilla.component';

describe('VerplanillaComponent', () => {
  let component: VerplanillaComponent;
  let fixture: ComponentFixture<VerplanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerplanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

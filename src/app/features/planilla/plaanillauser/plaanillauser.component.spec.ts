import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaanillauserComponent } from './plaanillauser.component';

describe('PlaanillauserComponent', () => {
  let component: PlaanillauserComponent;
  let fixture: ComponentFixture<PlaanillauserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaanillauserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaanillauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

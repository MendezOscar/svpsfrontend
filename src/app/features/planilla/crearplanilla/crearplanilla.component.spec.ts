import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearplanillaComponent } from './crearplanilla.component';

describe('CrearplanillaComponent', () => {
  let component: CrearplanillaComponent;
  let fixture: ComponentFixture<CrearplanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearplanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

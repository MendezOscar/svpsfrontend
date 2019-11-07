import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardeduccionComponent } from './creardeduccion.component';

describe('CreardeduccionComponent', () => {
  let component: CreardeduccionComponent;
  let fixture: ComponentFixture<CreardeduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreardeduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreardeduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

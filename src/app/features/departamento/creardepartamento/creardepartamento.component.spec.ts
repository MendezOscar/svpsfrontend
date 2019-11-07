import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardepartamentoComponent } from './creardepartamento.component';

describe('CreardepartamentoComponent', () => {
  let component: CreardepartamentoComponent;
  let fixture: ComponentFixture<CreardepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreardepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreardepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

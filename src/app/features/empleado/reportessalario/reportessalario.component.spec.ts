import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportessalarioComponent } from './reportessalario.component';

describe('ReportessalarioComponent', () => {
  let component: ReportessalarioComponent;
  let fixture: ComponentFixture<ReportessalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportessalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportessalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

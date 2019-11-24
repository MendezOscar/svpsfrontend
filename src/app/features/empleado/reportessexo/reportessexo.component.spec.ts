import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportessexoComponent } from './reportessexo.component';

describe('ReportessexoComponent', () => {
  let component: ReportessexoComponent;
  let fixture: ComponentFixture<ReportessexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportessexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportessexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

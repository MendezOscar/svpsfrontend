import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportescargosComponent } from './reportescargos.component';

describe('ReportescargosComponent', () => {
  let component: ReportescargosComponent;
  let fixture: ComponentFixture<ReportescargosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportescargosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportescargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

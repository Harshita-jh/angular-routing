import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcbootstrapComponent } from './calcbootstrap.component';

describe('CalcbootstrapComponent', () => {
  let component: CalcbootstrapComponent;
  let fixture: ComponentFixture<CalcbootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcbootstrapComponent]
    });
    fixture = TestBed.createComponent(CalcbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

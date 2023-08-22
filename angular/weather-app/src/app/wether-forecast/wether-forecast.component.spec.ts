import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherForecastComponent } from './wether-forecast.component';

describe('WetherForecastComponent', () => {
  let component: WetherForecastComponent;
  let fixture: ComponentFixture<WetherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WetherForecastComponent]
    });
    fixture = TestBed.createComponent(WetherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

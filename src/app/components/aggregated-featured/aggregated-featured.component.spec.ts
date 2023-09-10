import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatedFeaturedComponent } from './aggregated-featured.component';

describe('AggregatedFeaturedComponent', () => {
  let component: AggregatedFeaturedComponent;
  let fixture: ComponentFixture<AggregatedFeaturedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggregatedFeaturedComponent]
    });
    fixture = TestBed.createComponent(AggregatedFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

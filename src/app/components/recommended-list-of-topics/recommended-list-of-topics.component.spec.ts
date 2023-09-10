import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedListOfTopicsComponent } from './recommended-list-of-topics.component';

describe('RecommendedListOfTopicsComponent', () => {
  let component: RecommendedListOfTopicsComponent;
  let fixture: ComponentFixture<RecommendedListOfTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedListOfTopicsComponent]
    });
    fixture = TestBed.createComponent(RecommendedListOfTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySectionComponent } from './activity-section.component';

describe('ActivitySectionComponent', () => {
  let component: ActivitySectionComponent;
  let fixture: ComponentFixture<ActivitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

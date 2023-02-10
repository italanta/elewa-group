import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTimelineCarouselComponent } from './horizontal-timeline-carousel.component';

describe('HorizontalTimelineCarouselComponent', () => {
  let component: HorizontalTimelineCarouselComponent;
  let fixture: ComponentFixture<HorizontalTimelineCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalTimelineCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalTimelineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

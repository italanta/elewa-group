import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCarouselComponent } from './timeline-carousel.component';

describe('TimelineCarouselComponent', () => {
  let component: TimelineCarouselComponent;
  let fixture: ComponentFixture<TimelineCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

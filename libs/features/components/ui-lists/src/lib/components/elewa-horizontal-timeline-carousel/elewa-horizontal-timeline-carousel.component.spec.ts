import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaHorizontalTimelineCarouselComponent } from './elewa-horizontal-timeline-carousel.component';

describe('ElewaHorizontalTimelineCarouselComponent', () => {
  let component: ElewaHorizontalTimelineCarouselComponent;
  let fixture: ComponentFixture<ElewaHorizontalTimelineCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaHorizontalTimelineCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaHorizontalTimelineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


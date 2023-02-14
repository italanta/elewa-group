import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupHorizontalTimelineCarouselComponent } from './elewa-group-horizontal-timeline-carousel.component';

describe('ElewaGroupHorizontalTimelineCarouselComponent', () => {
  let component: ElewaGroupHorizontalTimelineCarouselComponent;
  let fixture: ComponentFixture<ElewaGroupHorizontalTimelineCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupHorizontalTimelineCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ElewaGroupHorizontalTimelineCarouselComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

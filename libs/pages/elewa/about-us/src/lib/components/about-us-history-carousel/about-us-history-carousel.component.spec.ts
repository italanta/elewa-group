import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHistoryCarouselComponent } from './about-us-history-carousel.component';

describe('AboutUsHistoryCarouselComponent', () => {
  let component: AboutUsHistoryCarouselComponent;
  let fixture: ComponentFixture<AboutUsHistoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsHistoryCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsHistoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

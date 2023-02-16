import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCarouselComponent } from './history-carousel.component';

describe('HistoryCarouselComponent', () => {
  let component: HistoryCarouselComponent;
  let fixture: ComponentFixture<HistoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaNewsSectionComponent } from './elewa-news-section.component';

describe('ElewaNewsSectionComponent', () => {
  let component: ElewaNewsSectionComponent;
  let fixture: ComponentFixture<ElewaNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaNewsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

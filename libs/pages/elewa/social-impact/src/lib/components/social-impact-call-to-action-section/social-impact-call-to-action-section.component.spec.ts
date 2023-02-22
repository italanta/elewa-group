import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactCallToActionSectionComponent } from './social-impact-call-to-action-section.component';

describe('SocialImpactCallToActionSectionComponent', () => {
  let component: SocialImpactCallToActionSectionComponent;
  let fixture: ComponentFixture<SocialImpactCallToActionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactCallToActionSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactCallToActionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

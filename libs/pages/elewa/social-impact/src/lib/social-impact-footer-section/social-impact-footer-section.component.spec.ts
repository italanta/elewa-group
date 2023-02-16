import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactFooterSectionComponent } from './social-impact-footer-section.component';

describe('SocialImpactFooterSectionComponent', () => {
  let component: SocialImpactFooterSectionComponent;
  let fixture: ComponentFixture<SocialImpactFooterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactFooterSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

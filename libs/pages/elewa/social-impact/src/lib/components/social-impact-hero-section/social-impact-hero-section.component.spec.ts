import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactHeroSectionComponent } from './social-impact-hero-section.component';

describe('SocialImpactHeroSectionComponent', () => {
  let component: SocialImpactHeroSectionComponent;
  let fixture: ComponentFixture<SocialImpactHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

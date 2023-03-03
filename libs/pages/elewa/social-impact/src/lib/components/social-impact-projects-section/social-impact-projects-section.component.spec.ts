import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactProjectsSectionComponent } from './social-impact-projects-section.component';

describe('SocialImpactProjectsSectionComponent', () => {
  let component: SocialImpactProjectsSectionComponent;
  let fixture: ComponentFixture<SocialImpactProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactProjectsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

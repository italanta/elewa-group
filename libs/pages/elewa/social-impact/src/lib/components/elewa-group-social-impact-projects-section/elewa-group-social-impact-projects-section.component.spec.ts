import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupSocialImpactProjectsSectionComponent } from './elewa-group-social-impact-projects-section.component';

describe('ElewaGroupSocialImpactProjectsSectionComponent', () => {
  let component: ElewaGroupSocialImpactProjectsSectionComponent;
  let fixture: ComponentFixture<ElewaGroupSocialImpactProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupSocialImpactProjectsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ElewaGroupSocialImpactProjectsSectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

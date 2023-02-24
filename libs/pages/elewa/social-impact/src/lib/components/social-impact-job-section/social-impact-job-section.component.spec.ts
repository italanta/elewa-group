import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactJobSectionComponent } from './social-impact-job-section.component';

describe('SocialImpactJobSectionComponent', () => {
  let component: SocialImpactJobSectionComponent;
  let fixture: ComponentFixture<SocialImpactJobSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactJobSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactJobSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

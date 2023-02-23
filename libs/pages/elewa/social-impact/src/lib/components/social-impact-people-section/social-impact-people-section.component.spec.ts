import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactPeopleSectionComponent } from './social-impact-people-section.component';

describe('SocialImpactPeopleSectionComponent', () => {
  let component: SocialImpactPeopleSectionComponent;
  let fixture: ComponentFixture<SocialImpactPeopleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactPeopleSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactPeopleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactBeyondBusinessSectionComponent } from './social-impact-beyond-business-section.component';

describe('SocialImpactBeyondBusinessSectionComponent', () => {
  let component: SocialImpactBeyondBusinessSectionComponent;
  let fixture: ComponentFixture<SocialImpactBeyondBusinessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactBeyondBusinessSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SocialImpactBeyondBusinessSectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactFooteSectionComponent } from './social-impact-foote-section.component';

describe('SocialImpactFooteSectionComponent', () => {
  let component: SocialImpactFooteSectionComponent;
  let fixture: ComponentFixture<SocialImpactFooteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactFooteSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactFooteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

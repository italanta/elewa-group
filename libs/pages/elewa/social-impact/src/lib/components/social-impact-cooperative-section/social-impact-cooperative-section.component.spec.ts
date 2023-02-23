import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactCooperativeSectionComponent } from './social-impact-cooperative-section.component';

describe('SocialImpactCooperativeSectionComponent', () => {
  let component: SocialImpactCooperativeSectionComponent;
  let fixture: ComponentFixture<SocialImpactCooperativeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactCooperativeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactCooperativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

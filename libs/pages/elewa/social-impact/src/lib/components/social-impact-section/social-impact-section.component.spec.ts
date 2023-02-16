import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactSectionComponent } from './social-impact-section.component';

describe('SocialImpactSectionComponent', () => {
  let component: SocialImpactSectionComponent;
  let fixture: ComponentFixture<SocialImpactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

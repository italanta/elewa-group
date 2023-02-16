import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactKnowlegeSectionComponent } from './social-impact-knowlege-section.component';

describe('SocialImpactKnowlegeSectionComponent', () => {
  let component: SocialImpactKnowlegeSectionComponent;
  let fixture: ComponentFixture<SocialImpactKnowlegeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactKnowlegeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactKnowlegeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImpactPageTopBannerComponent } from './social-impact-page-top-banner.component';

describe('SocialImpactPageTopBannerComponent', () => {
  let component: SocialImpactPageTopBannerComponent;
  let fixture: ComponentFixture<SocialImpactPageTopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialImpactPageTopBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialImpactPageTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

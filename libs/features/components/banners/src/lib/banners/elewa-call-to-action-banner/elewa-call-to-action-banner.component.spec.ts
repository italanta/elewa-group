import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaCallToActionBannerComponent } from './elewa-call-to-action-banner.component';

describe('ElewaCallToActionBannerComponent', () => {
  let component: ElewaCallToActionBannerComponent;
  let fixture: ComponentFixture<ElewaCallToActionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaCallToActionBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaCallToActionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

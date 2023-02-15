import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaGroupImageAndTextBannerComponent } from './elewa-group-image-and-text-banner.component';

describe('ElewaGroupImageAndTextBannerComponent', () => {
  let component: ElewaGroupImageAndTextBannerComponent;
  let fixture: ComponentFixture<ElewaGroupImageAndTextBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaGroupImageAndTextBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaGroupImageAndTextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

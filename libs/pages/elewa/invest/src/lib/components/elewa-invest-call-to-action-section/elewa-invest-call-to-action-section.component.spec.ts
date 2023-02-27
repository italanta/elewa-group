import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestCallToActionSectionComponent } from './elewa-invest-call-to-action-section.component';

describe('ElewaInvestCallToActionSectionComponent', () => {
  let component: ElewaInvestCallToActionSectionComponent;
  let fixture: ComponentFixture<ElewaInvestCallToActionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestCallToActionSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInvestCallToActionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

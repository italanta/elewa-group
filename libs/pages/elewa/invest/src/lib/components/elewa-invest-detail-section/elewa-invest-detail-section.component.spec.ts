import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestDetailSectionComponent } from './elewa-invest-detail-section.component';

describe('ElewaInvestDetailSectionComponent', () => {
  let component: ElewaInvestDetailSectionComponent;
  let fixture: ComponentFixture<ElewaInvestDetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestDetailSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInvestDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

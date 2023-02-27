import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestStakeholderSectionComponent } from './elewa-invest-stakeholder-section.component';

describe('ElewaInvestStakeholderSectionComponent', () => {
  let component: ElewaInvestStakeholderSectionComponent;
  let fixture: ComponentFixture<ElewaInvestStakeholderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestStakeholderSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInvestStakeholderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

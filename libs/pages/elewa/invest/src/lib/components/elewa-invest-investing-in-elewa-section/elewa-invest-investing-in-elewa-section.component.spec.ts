import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestInvestingInElewaSectionComponent } from './elewa-invest-investing-in-elewa-section.component';

describe('ElewaInvestInvestingInElewaSectionComponent', () => {
  let component: ElewaInvestInvestingInElewaSectionComponent;
  let fixture: ComponentFixture<ElewaInvestInvestingInElewaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestInvestingInElewaSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ElewaInvestInvestingInElewaSectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

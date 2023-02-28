import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestKeyFiguresSectionComponent } from './elewa-invest-key-figures-section.component';

describe('ElewaInvestKeyFiguresSectionComponent', () => {
  let component: ElewaInvestKeyFiguresSectionComponent;
  let fixture: ComponentFixture<ElewaInvestKeyFiguresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestKeyFiguresSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInvestKeyFiguresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

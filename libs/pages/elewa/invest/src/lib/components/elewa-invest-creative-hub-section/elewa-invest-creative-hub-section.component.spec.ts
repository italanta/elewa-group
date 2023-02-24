import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestCreativeHubSectionComponent } from './elewa-invest-creative-hub-section.component';

describe('ElewaInvestCreativeHubSectionComponent', () => {
  let component: ElewaInvestCreativeHubSectionComponent;
  let fixture: ComponentFixture<ElewaInvestCreativeHubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestCreativeHubSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInvestCreativeHubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

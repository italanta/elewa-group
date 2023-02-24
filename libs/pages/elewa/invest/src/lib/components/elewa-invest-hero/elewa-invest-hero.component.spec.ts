import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaInvestHeroComponent } from './elewa-invest-hero.component';

describe('ElewaInvestHeroComponent', () => {
  let component: ElewaInvestHeroComponent;
  let fixture: ComponentFixture<ElewaInvestHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaInvestHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaInvestHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

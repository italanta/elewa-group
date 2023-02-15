import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaHeroComponent } from './elewa-hero.component';

describe('ElewaHeroComponent', () => {
  let component: ElewaHeroComponent;
  let fixture: ComponentFixture<ElewaHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

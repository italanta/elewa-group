import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLabsHeroComponent } from './venture-labs-hero.component';

describe('VentureLabsHeroComponent', () => {
  let component: VentureLabsHeroComponent;
  let fixture: ComponentFixture<VentureLabsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureLabsHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureLabsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

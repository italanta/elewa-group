import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureDetailHeroComponent } from './venture-detail-hero.component';

describe('VentureDetailHeroComponent', () => {
  let component: VentureDetailHeroComponent;
  let fixture: ComponentFixture<VentureDetailHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentureDetailHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentureDetailHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

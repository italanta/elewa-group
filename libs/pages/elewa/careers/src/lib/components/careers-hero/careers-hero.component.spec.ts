import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersHeroComponent } from './careers-hero.component';

describe('CareersHeroComponent', () => {
  let component: CareersHeroComponent;
  let fixture: ComponentFixture<CareersHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareersHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

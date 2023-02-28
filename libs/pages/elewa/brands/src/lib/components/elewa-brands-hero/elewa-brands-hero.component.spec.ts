import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaBrandsHeroComponent } from './elewa-brands-hero.component';

describe('ElewaBrandsHeroComponent', () => {
  let component: ElewaBrandsHeroComponent;
  let fixture: ComponentFixture<ElewaBrandsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaBrandsHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElewaBrandsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImpactSectionComponent } from './home-impact-section.component';

describe('HomeImpactSectionComponent', () => {
  let component: HomeImpactSectionComponent;
  let fixture: ComponentFixture<HomeImpactSectionComponent>;
  ;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeImpactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeImpactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

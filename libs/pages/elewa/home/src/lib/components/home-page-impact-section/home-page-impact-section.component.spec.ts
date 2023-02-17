import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageImpactSectionComponent } from './home-page-impact-section.component';

describe('HomePageImpactSectionComponent', () => {
  let component: HomePageImpactSectionComponent;
  let fixture: ComponentFixture<HomePageImpactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageImpactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageImpactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

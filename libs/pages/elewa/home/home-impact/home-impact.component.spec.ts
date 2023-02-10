import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImpactComponent } from './home-impact.component';

describe('HomeImpactComponent', () => {
  let component: HomeImpactComponent;
  let fixture: ComponentFixture<HomeImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeImpactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLocationSectionComponent } from './about-us-location-section.component';

describe('AboutUsLocationSectionComponent', () => {
  let component: AboutUsLocationSectionComponent;
  let fixture: ComponentFixture<AboutUsLocationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsLocationSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsLocationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

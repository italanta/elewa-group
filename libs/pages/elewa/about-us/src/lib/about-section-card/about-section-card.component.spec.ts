import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionCardComponent } from './about-section-card.component';

describe('AboutSectionCardComponent', () => {
  let component: AboutSectionCardComponent;
  let fixture: ComponentFixture<AboutSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSectionCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

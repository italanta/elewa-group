import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCareSectionComponent } from './we-care-section.component';

describe('WeCareSectionComponent', () => {
  let component: WeCareSectionComponent;
  let fixture: ComponentFixture<WeCareSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeCareSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeCareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

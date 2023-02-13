import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleImpactSectionComponent } from './people-impact-section.component';

describe('PeopleImpactSectionComponent', () => {
  let component: PeopleImpactSectionComponent;
  let fixture: ComponentFixture<PeopleImpactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleImpactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleImpactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

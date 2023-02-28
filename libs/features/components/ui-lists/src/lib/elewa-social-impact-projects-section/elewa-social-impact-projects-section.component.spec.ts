import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaSocialImpactProjectsSectionComponent } from './elewa-social-impact-projects-section.component';

describe('ElewaSocialImpactProjectsSectionComponent', () => {
  let component: ElewaSocialImpactProjectsSectionComponent;
  let fixture: ComponentFixture<ElewaSocialImpactProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElewaSocialImpactProjectsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ElewaSocialImpactProjectsSectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSectionComponent } from './jobs-section.component';

describe('JobsSectionComponent', () => {
  let component: JobsSectionComponent;
  let fixture: ComponentFixture<JobsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

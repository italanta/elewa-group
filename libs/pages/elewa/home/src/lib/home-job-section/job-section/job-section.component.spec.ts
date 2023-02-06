import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSectionComponent } from './job-section.component';

describe('JobSectionComponent', () => {
  let component: JobSectionComponent;
  let fixture: ComponentFixture<JobSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

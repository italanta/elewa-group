import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersVacanciesComponent } from './careers-vacancies.component';

describe('CareersVacanciesComponent', () => {
  let component: CareersVacanciesComponent;
  let fixture: ComponentFixture<CareersVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareersVacanciesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

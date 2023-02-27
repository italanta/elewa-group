import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'elewa-group-careers-vacancies',
  templateUrl: './careers-vacancies.component.html',
  styleUrls: ['./careers-vacancies.component.scss'],
})
export class CareersVacanciesComponent {
  message1 = 'Apply Now';
  constructor(private router: Router) {}
  btnClick = () => {
    this.router.navigate(['/careers/careerId']);
  };
  
}

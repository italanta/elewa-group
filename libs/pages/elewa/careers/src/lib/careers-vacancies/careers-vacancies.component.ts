import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-careers-vacancies',
  templateUrl: './careers-vacancies.component.html',
  styleUrls: ['./careers-vacancies.component.scss'],
})
export class CareersVacanciesComponent {
  @Input() title = "Vacancies"
  buttontext ="Apply now"
}

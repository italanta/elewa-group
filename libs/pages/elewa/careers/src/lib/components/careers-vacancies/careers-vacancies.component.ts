import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'elewa-group-careers-vacancies',
  templateUrl: './careers-vacancies.component.html',
  styleUrls: ['./careers-vacancies.component.scss'],
})
export class CareersVacanciesComponent {
  vacancies = [
    {
      title: 'Senior Software Engineer',
      description:
        'Elewa is currently seeking a Senior Software Engineer to join our growing team. The Senior Software Engineer will be responsible for designing and implementing high-quality software solutions as well as mentoring and leading other engineers on the team.',
    },
    {
      title: 'Marketing Manager',
      description:
        'Elewa is currently seeking a Marketing Manager to join our team. The Marketing Manager will be responsible for developing and implementing marketing strategies to drive brand awareness and business growth. <br><br> <strong>Key responsibilities:</strong> <br> <br> -Develop and execute marketing plans and campaigns <br> <br>-Manage the companys social media presence and content strategy <br><br> -Collaborate with the sales team to develop and execute lead generation campaigns <br> <br> -Analyze and report on marketing performance and ROI -Manage relationships with external marketing agencies and vendors <br> <br>-Oversee budget and resource allocation for marketing initiatives <br><br><strong>Qualifications:</strong><br><br> -Bachelors degree in Marketing or a related field<br><br> -Excellent communication and interpersonal skills <br><br> -Strong project management and organizational abilities<br><br> -Proficiency in marketing automation and analytics tools <br><br> -If you are a strategic thinker with a passion for driving business growth through innovative marketing campaigns we encourage you to apply',
    },
    {
      title: 'PM Intern',
      description:
        'We are currently seeking a Project Manager Intern to join our team. The Project Manager Intern will work closely with our Project Managers to assist in the planning, execution and delivery of various projects. This is a great opportunity for a recent graduate or current student looking to gain hands-on experience in project management.',
    },
  ];
  message1 = 'Apply Now';
  constructor(private router: Router) {}
  btnClick = () => {
    this.router.navigate(['/careers/careerId']);
  };
}

import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-careers-vacancies',
  templateUrl: './careers-vacancies.component.html',
  styleUrls: ['./careers-vacancies.component.scss'],
})
export class CareersVacanciesComponent{

  @Input() title = "Vacancies"
  buttontext ="Apply now"
 
  jobs = [
    {
      id: 1,
      title: "Senior Software Engineeer",
      description:"Elewa is curently seeeking a Senior Software Engineeer to join our growing team.The Senior Software Engineeer will be responsible for designing for designing and implementing high-qualitysoftware solutiions,as well as mentoring and leading other engineeers on the team",

    },
    {
      id:2,
      title: "Marketing Manager",
      description:"Elewa is currently seeking a Marketing Manager to join our team.The Marketing Manager will be responsible for developing and implementing marketing stragies to drive brand awareness and business growth.",
      responsibilities: [ "Develop and execute marketing plans and campaigns",
      "Manage the company's social media presence and contents strategy",
     " Collaborate with the sales team to develop and execute lead generation campaigns",
    "  Analyse and report on marketing performance and ROI",
     " Manage relationships with external marketing agencies and vendors",
      "Oversee budget and resource allocation for marketing initiatives"
    ],
    qualifications: ["Bachelor's degree in Marketing or a related field",
    "5+ years of experience in a marketing with a focus on a digital marketing",
    "Excellent communication and interpersonal skills",
   "Strong project management and organizational abilities",
    "Profiency in marketing automation and analytics tools",
    "If you are a strategic thinker with a passion for driving business growth through innovative markerting campaigns we encourage you to apply"],
    },
    {
      id:"3",
      title:"PM Intern",
      description:"We are currently seeking a Project Manager Intern to Join our team.The Project Manager will work closely with our project managers to assist in the planning,execution and delivery of various projects.This is a great opportunity for a recent graduate or current student looking to gain hands-on experience in project management"
    }

  ]
  
}

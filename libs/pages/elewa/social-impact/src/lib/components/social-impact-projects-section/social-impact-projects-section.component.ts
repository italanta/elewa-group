import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-projects-section',
  templateUrl: './social-impact-projects-section.component.html',
  styleUrls: ['./social-impact-projects-section.component.scss'],
})
export class SocialImpactProjectsSectionComponent {

  message = 'Become part of our mission.'
  callToActionText = 'Elewa'
  word = 'And join'
  url = '""'
  newItems = [
    {
      title: 'WWF',
      description: 'Elewa group vertical list one works!',
      date: 'Feb 2023',
    },
    {
      title: 'VVOB Rwanda',
      description: 'Elewa group vertical list one works!',
      date: 'Sep 2022',
    },
    {
      title: 'Farmbetter',
      description: 'Elewa group vertical list one works!',
      date: 'Feb 2020',
    },
    {
      title: 'Enabel',
      description: 'Elewa group vertical list one works!',
      date: 'May 2019',
    },
    {
      title: 'Kakuma',
      description: 'Elewa group vertical list one works!',  
      date: 'sep 2017',
    },
    {
      title: 'Hackathon for Refugees',
      description: 'Elewa group vertical list one works!',
      date: 'June 2015',
    }

  ];
}

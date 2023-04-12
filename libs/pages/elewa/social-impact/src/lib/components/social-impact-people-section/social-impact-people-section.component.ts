import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-social-impact-people-section',
  templateUrl: './social-impact-people-section.component.html',
  styleUrls: ['./social-impact-people-section.component.scss'],
})
export class SocialImpactPeopleSectionComponent implements OnInit {

  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg';

  peopleTrained = 0;
  careers = 0;
  projectCount = 0;
  investors = 0;

  peopleTrainedCountStop: any;
  investorsCountStop: any;
  careersCountStop: any;
  projectCountStop: any;


  ngOnInit(): void {
    AOS.init({once: true});

    this.peopleTrainedCountStop = setInterval(() => {
      this.peopleTrained++;
  
      if (this.peopleTrained == 733) {
        clearInterval(this.peopleTrainedCountStop)
      }
    }, 5);
  
    this.careersCountStop = setInterval(() => {
      this.careers++;
  
      if (this.careers == 733) {
        clearInterval(this.careersCountStop)
      }
    }, 5);
  
    this.projectCountStop = setInterval(() => {
      this.projectCount++;
  
      if (this.projectCount == 200) {
        clearInterval(this.projectCountStop)
      }
    }, 25);
    
    this.investorsCountStop = setInterval(() => {
      this.investors++;
  
      if (this.investors == 56) {
        clearInterval(this.investorsCountStop)
      }
    }, 90)
  }
}

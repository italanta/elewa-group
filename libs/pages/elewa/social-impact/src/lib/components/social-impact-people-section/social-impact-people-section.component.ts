import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-people-section',
  templateUrl: './social-impact-people-section.component.html',
  styleUrls: ['./social-impact-people-section.component.scss']
})
export class SocialImpactPeopleSectionComponent {
  peopleTrained = 0;

  peopleTrainedCountStop = setInterval(() => {
    this.peopleTrained++;

    if (this.peopleTrained == 733) {
      clearInterval(this.peopleTrainedCountStop)
    }
  }, 5)

  careers = 0;

  careersCountStop = setInterval(() => {
    this.careers++;

    if (this.careers == 13) {
      clearInterval(this.careersCountStop)
    }
  }, 200)

  projectCount = 0;

  projectCountStop = setInterval(() => {
    this.projectCount++;

    if (this.projectCount == 200) {
      clearInterval(this.projectCountStop)
    }
  }, 27)

  investors = 0;

  investorsCountStop = setInterval(() => {
    this.investors++;

    if (this.investors == 56) {
      clearInterval(this.investorsCountStop)
    }
  }, 100)
}

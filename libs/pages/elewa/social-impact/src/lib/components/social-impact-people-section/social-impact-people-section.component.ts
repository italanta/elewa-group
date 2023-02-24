import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-people-section',
  templateUrl: './social-impact-people-section.component.html',
  styleUrls: ['./social-impact-people-section.component.scss'],
})
export class SocialImpactPeopleSectionComponent {

  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png';

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

    if (this.careers == 733) {
      clearInterval(this.careersCountStop)
    }
  }, 5)

  projectCount = 0;

  projectCountStop = setInterval(() => {
    this.projectCount++;

    if (this.projectCount == 200) {
      clearInterval(this.projectCountStop)
    }
  }, 25)

  investors = 0;

  investorsCountStop = setInterval(() => {
    this.investors++;

    if (this.investors == 56) {
      clearInterval(this.investorsCountStop)
    }
  }, 90)
}

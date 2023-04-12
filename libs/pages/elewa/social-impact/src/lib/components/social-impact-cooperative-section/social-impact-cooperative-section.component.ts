import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-cooperative-section',
  templateUrl: './social-impact-cooperative-section.component.html',
  styleUrls: ['./social-impact-cooperative-section.component.scss'],
})
export class SocialImpactCooperativeSectionComponent {
  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg'
  paragraphTexts = [`Elewa has one shared objective; To
                            unlock the true potential of individuals, teams, and the
                            community. We believe strongly in the power of 
                            sharing ideas and continuously strive to grow each other and ourselves. 
                            Internally, but also within the larger communities in which we are active.`]
  titleText = `A cooperative mindset`
  imagePlacement = 'right'
  backgroundColor = '#ECECEC'
}

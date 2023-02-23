import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-creative-hub-section',
  templateUrl: './elewa-invest-creative-hub-section.component.html',
  styleUrls: ['./elewa-invest-creative-hub-section.component.scss'],
})
export class ElewaInvestCreativeHubSectionComponent {
  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/Mask_Group_20_yshsq2.png'
  paragraphTexts = [`The Elewa Creative Hub lise at the heart of our organization. A two-acre
  property in the center of Nairobi's creative district, the hub connects 
  all Elewa's activities under a single banner.`,

  `Through partnerships with the creative community, the Elewa Hub organizes 
  vibrant activities that bring together talents from different fields
  (tech, business, art, fashion) to nurture continuous innovation.`
]
  
  titleText = `Elewa Creative hub`
  imagePlacement = 'right'
  backgroundColor = 'white'
}

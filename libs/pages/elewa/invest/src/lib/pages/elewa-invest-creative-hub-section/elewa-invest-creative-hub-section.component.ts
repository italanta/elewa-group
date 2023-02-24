import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-creative-hub-section',
  templateUrl: './elewa-invest-creative-hub-section.component.html',
  styleUrls: ['./elewa-invest-creative-hub-section.component.scss'],
})
export class ElewaInvestCreativeHubSectionComponent {
  title= "Elewa Creative hub"
  paragraphs = ["The Elewa Creative Hub Lies at the heart of our organization. A two-acre property center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.", "", "Through partnerships with creative community, the Elewa Hub organizes vibrant activites tht bring talents from different fields (tech, business, art, fashion) to nurture continuous innovation"]
  imagePosition = "right"
  imgURL= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/Mask_Group_20_yshsq2.png"
  bgColor = "white"
  textColor= "black"
}

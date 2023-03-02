import { Component, } from '@angular/core';
// import {ElewaGroupBrandsComponent} from './elewa-brands-creative-hub.component.spec'

@Component({
  selector: 'elewa-group-elewa-brands-creative-hub',
  templateUrl: './elewa-brands-creative-hub.component.html',
  styleUrls: ['./elewa-brands-creative-hub.component.scss'],
})
export class ElewaBrandsCreativeHubComponent {
  logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/CreativeHub_r5pshe.svg'
  name ='Elewa Creative Hub'
  brandDescription = 'Elewa Creative Hub is a two-acre creative space, located in the heart of Nairobi, offering refuge to Elewa talents and creatives to explore and grow.'
  buttonText = 'Learn More'
}

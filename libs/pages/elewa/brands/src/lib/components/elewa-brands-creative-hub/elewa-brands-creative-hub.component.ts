import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-creative-hub',
  templateUrl: './elewa-brands-creative-hub.component.html',
  styleUrls: ['./elewa-brands-creative-hub.component.scss'],
})
export class ElewaBrandsCreativeHubComponent {
  @Input() creativeImage = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/CreativeHub_r5pshe.svg'
  @Input() creativeName = 'Elewa Creative Hub'
  @Input() creativeDescription = 'Elewa Creative Hub is a two-acre space, located in the heart of Nairobi, offering refuge to Elewa talents and creatives to explore and grow'
  @Input() creativeButtonText = 'Learn more'
  @Input() creativeUrl = ''
  @Input() creativePlacement = 'right'
}

import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-brands-creative-hub',
  templateUrl: './brands-creative-hub.component.html',
  styleUrls: ['./brands-creative-hub.component.scss'],
})
export class BrandsCreativeHubComponent {
  @Input() creativeImage = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/CreativeHub_r5pshe.svg'
  @Input() creativeName = 'Elewa Creative Hub'
  @Input() creativeDescription = 'Elewa Creative Hub is a two-acre space, located in the heart of Nairobi, offering refuge to Elewa talents and creatives to explore and grow'
  @Input() creativeButtonText = 'Learn more'
  @Input() creativeUrl = ''
  @Input() creativePlacement = 'right'
}

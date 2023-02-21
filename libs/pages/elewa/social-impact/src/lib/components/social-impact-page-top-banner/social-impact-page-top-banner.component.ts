import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-page-top-banner',
  templateUrl: './social-impact-page-top-banner.component.html',
  styleUrls: ['./social-impact-page-top-banner.component.scss'],
})
export class SocialImpactPageTopBannerComponent {
  @Input() subtitle = 'Social Enterprise';
  @Input() title = 'A Vehicle for Rapid & Scalable human development';
  @Input() footerText = '';
  @Input() backgroundImg = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png';
}

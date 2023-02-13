import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() title = 'A cooperative mindset';
  @Input() description = 'Elewa\'s Businessess have one common objective, to unlock true potential of individuals, teams, and communities. All out talents are enrolled in a personal growth track. In turn, they contribute their own growth towards the growth of others, the group and their communities.';
  @Input() img = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png'
}
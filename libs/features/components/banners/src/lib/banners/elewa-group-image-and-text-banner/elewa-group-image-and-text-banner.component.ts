import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() title1 = 'A cooperative Mindset';
  @Input() description1 = 'Elewa\'s Businessess have one common objective, to unlock true potential of individuals, teams, and communities. All out talents are enrolled in a personal growth track. In turn, they contribute their own growth towards the growth of others, the group and their communities.';
  @Input() img1 = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png'
  // @Input() title2 = 'Beyond Business';
  // @Input() description2 = 'Some of that youthful energy is channeled beyond business. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers. These projects don\'t necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term';
  // @Input() img2 ='';
}
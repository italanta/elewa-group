import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupTeamMemberComponent } from './banners/elewa-group-team-member/elewa-group-team-member.component';
import { ElewaGroupImageAndTextBannerComponent } from './banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
  ],
  exports: [ElewaGroupTeamMemberComponent, ElewaGroupImageAndTextBannerComponent],
})
export class BannersModule {
  @Input() imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png'
  @Input() paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ante sagittis, tempus turpis in, condimentum erat. Praesent dictum velit nunc, sagittis tristique tellus imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero felis, varius ac ante quis'
  @Input() imageplacement = 'left'
  @Input() backgroundColor = '#000000'
}

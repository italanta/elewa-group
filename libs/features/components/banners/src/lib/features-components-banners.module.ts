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
  @Input() paragraphText = `Elewa's businesses have one common objective, to
                            unlock true potential of individuals, teams, and
                            communities. All our talents are enrolled in a personal
                            growth track. In turn, they contribute teir own growth
                            towards teh growth of others, the group and their
                            communities.`
  @Input() titleText = `A cooperative mindset`
  @Input() imageplacement = 'left'
  @Input() backgroundColor = '#000000'
}

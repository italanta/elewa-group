import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaGroupImageAndTextBannerComponent } from './banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
import { ElewaGroupTeamMemberComponent } from './banners/elewa-group-team-member/elewa-group-team-member.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupTeamMemberComponent, ElewaGroupImageAndTextBannerComponent],
  exports: [ElewaGroupTeamMemberComponent, ElewaGroupImageAndTextBannerComponent],
})
export class BannersModule {}



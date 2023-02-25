import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

import { ElewaGroupImageAndTextBannerComponent } from './banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
import { ElewaGroupTeamMemberComponent } from './banners/elewa-group-team-member/elewa-group-team-member.component';
import { ElewaGroupCallToActionComponent } from './banners/elewa-group-call-to-action/elewa-group-call-to-action.component';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
    ElewaGroupCallToActionComponent,
  ],
  exports: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
  ],
})
export class BannersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router'
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ElewaGroupImageAndTextBannerComponent } from './banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
import { ElewaGroupTeamMemberComponent } from './banners/elewa-group-team-member/elewa-group-team-member.component';
import { ElewaCallToActionBannerComponent } from './banners/elewa-call-to-action-banner/elewa-call-to-action-banner.component';

@NgModule({

  imports: [CommonModule, RouterLink],
  declarations: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
    ElewaCallToActionBannerComponent,
  ],
  exports: [
    ElewaGroupTeamMemberComponent,
    ElewaGroupImageAndTextBannerComponent,
    ElewaCallToActionBannerComponent,
  ],

  imports: [CommonModule, ButtonsModule],
  declarations: [ElewaGroupTeamMemberComponent, ElewaGroupImageAndTextBannerComponent],
  exports: [ElewaGroupTeamMemberComponent, ElewaGroupImageAndTextBannerComponent],

})
export class BannersModule {}

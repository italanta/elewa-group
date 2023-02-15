import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupImageAndTextBannerComponent } from './banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupImageAndTextBannerComponent],
  exports: [ElewaGroupImageAndTextBannerComponent],
})
export class BannersModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupTeamMemberComponent } from './banners/elewa-group-team-member/elewa-group-team-member.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupTeamMemberComponent],
  exports: [ElewaGroupTeamMemberComponent]
})
export class BannersModule {}


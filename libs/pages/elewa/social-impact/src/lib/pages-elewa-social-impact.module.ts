import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleSectionComponent } from './component/people-section/people-section.component';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, PeopleSectionComponent,ElewaGroupImageAndTextBannerComponent],
})

export class SocialImpactModule {}

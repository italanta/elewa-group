import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
import { SocialImpactPeopleSectionComponent } from './social-impact-people-section/social-impact-people-section.component';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule],
  declarations: [
    SocialImpactPageComponent,
    ElewaGroupImageAndTextBannerComponent,
    SocialImpactPeopleSectionComponent,
  ],
  exports: [SocialImpactPageComponent, SocialImpactPeopleSectionComponent],
})
export class SocialImpactModule {}

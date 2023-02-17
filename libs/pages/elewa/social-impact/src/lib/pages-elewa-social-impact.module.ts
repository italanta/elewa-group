import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';
import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactPeopleSectionComponent, ElewaGroupImageAndTextBannerComponent],
})
export class SocialImpactModule {}

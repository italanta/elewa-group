import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactPeopleSectionComponent, ElewaGroupImageAndTextBannerComponent],
  exports: [SocialImpactPageComponent]
})
export class SocialImpactModule {}

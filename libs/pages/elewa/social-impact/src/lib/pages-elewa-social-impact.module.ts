import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { ReusableHomeJobsSectionComponent } from './components/reusable-home-jobs-section/reusable-home-jobs-section.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    BannersModule,
    SocialImpactRoutingModule,
  ],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactHeroSectionComponent,
    SocialImpactPeopleSectionComponent,
    SocialImpactCooperativeSectionComponent,
    ReusableHomeJobsSectionComponent,
  ],
  exports: [SocialImpactPageComponent,ReusableHomeJobsSectionComponent],
})
export class SocialImpactModule {}

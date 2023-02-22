import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule, BannersModule],
  declarations: [SocialImpactPageComponent, SocialImpactHeroSectionComponent, SocialImpactPeopleSectionComponent],
  exports: [SocialImpactPageComponent]
})
export class SocialImpactModule {}

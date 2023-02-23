import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactOpenKnowledgeComponent } from './components/social-impact-open-knowledge/social-impact-open-knowledge.component';
import { SocialImpactBeyondBusinessSectionComponent } from './components/social-impact-beyond-business-section/social-impact-beyond-business-section.component';

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
    SocialImpactOpenKnowledgeComponent,
    SocialImpactCooperativeSectionComponent,
    SocialImpactBeyondBusinessSectionComponent,
  ],
  exports: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

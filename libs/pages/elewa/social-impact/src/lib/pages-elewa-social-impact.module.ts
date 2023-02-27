import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';
import { SocialImpactOpenKnowledgeComponent } from './components/social-impact-open-knowledge/social-impact-open-knowledge.component';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { BeyondBusinessComponent } from './components/beyond-business/beyond-business.component';
import { SocialImpactRoutingModule } from './social-impact.routing';

import { SocialCallToActionComponent } from './components/social-call-to-action/social-call-to-action.component';

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
    SocialCallToActionComponent,
    BeyondBusinessComponent

  ],
  exports: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';


import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactCallToActionSectionComponent } from './components/social-impact-call-to-action-section/social-impact-call-to-action-section.component';

@NgModule({

  imports: [CommonModule, LayoutModule,BannersModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactHeroSectionComponent,SocialImpactCallToActionSectionComponent,SocialImpactPeopleSectionComponent,
    SocialImpactCooperativeSectionComponent],
  exports: [SocialImpactPageComponent,SocialImpactCallToActionSectionComponent],

  
})
export class SocialImpactModule {}

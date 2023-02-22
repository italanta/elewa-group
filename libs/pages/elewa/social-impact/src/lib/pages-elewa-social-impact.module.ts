import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { CooperativeSectionComponent } from './components/cooperative-section/cooperative-section.component';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactHeroSectionComponent,
    CooperativeSectionComponent,
    SocialImpactCooperativeSectionComponent,
  ],
  exports: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

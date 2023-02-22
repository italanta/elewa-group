import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactCallToActionSectionComponent } from './components/social-impact-call-to-action-section/social-impact-call-to-action-section.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactHeroSectionComponent,SocialImpactCallToActionSectionComponent],
  exports: [SocialImpactPageComponent,SocialImpactCallToActionSectionComponent],
})
export class SocialImpactModule {}

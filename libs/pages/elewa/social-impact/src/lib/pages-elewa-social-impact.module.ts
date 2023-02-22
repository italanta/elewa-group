import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { BannersModule } from '@elewa-group/features/components/banners'
import { SocialImpactCooperativeComponent } from './components/social-impact-cooperative/social-impact-cooperative.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule, BannersModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactHeroSectionComponent,
    SocialImpactCooperativeComponent
  ],
  exports: [SocialImpactPageComponent, SocialImpactCooperativeComponent],
})
export class SocialImpactModule {}

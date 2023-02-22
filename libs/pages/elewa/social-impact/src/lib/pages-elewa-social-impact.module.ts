import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { BeyondBusinessComponent } from './pages/components/beyond-business/beyond-business.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactHeroSectionComponent],
  exports: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

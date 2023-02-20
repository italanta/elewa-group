import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactHeroSectionComponent } from './components/social-impact-hero-section/social-impact-hero-section.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactFooterComponent } from './components/social-impact-footer/social-impact-footer.component';

import { LayoutModule } from '@elewa-group/elements/layout';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  imports: [CommonModule, LayoutModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactHeroSectionComponent],
  exports: [SocialImpactPageComponent],

})
export class SocialImpactModule {}

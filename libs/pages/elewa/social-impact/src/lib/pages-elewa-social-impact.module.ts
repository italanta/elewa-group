import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactFooterComponent } from './components/social-impact-footer/social-impact-footer.component';

import { LayoutModule } from '@elewa-group/elements/layout';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { SocialImpactHeroComponent } from './components/social-impact-hero/social-impact-hero.component';
@NgModule({
  imports: [CommonModule,SocialImpactRoutingModule, LayoutModule, ButtonsModule],
  declarations: [SocialImpactPageComponent, SocialImpactFooterComponent,SocialImpactHeroComponent],
  exports: [SocialImpactFooterComponent]
})
export class SocialImpactModule {}

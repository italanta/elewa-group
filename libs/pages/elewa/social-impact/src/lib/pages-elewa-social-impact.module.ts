import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactFooteSectionComponent } from './social-impact-foote-section/social-impact-foote-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  imports: [
    CommonModule, 
    SocialImpactRoutingModule,
    LayoutModule,
    ButtonsModule
  ],
  declarations: [SocialImpactPageComponent, SocialImpactFooteSectionComponent],
  exports: [SocialImpactFooteSectionComponent]
})
export class SocialImpactModule {}

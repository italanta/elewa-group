import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactCooperativeSectionComponent } from './components/social-impact-cooperative-section/social-impact-cooperative-section.component';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactCooperativeSectionComponent,
  ],
})
export class SocialImpactModule {}

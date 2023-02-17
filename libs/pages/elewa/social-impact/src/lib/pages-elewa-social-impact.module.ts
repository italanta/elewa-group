import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactBeyondBusinessSectionComponent } from './components/social-impact-beyond-business-section/social-impact-beyond-business-section.component';

import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule, BannersModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactBeyondBusinessSectionComponent,
  ],
})
export class SocialImpactModule {}

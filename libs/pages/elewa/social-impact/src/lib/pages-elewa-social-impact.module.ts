import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { SocialImpactPageTopBannerComponent } from './components/social-impact-page-top-banner/social-impact-page-top-banner.component';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, SocialImpactPageTopBannerComponent],
})
export class SocialImpactModule {}

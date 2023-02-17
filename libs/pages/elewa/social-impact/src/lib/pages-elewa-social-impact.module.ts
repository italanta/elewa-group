import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { BeyondBusinessComponent } from './pages/components/beyond-business/beyond-business.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule, BannersModule],
  declarations: [SocialImpactPageComponent, BeyondBusinessComponent],
})
export class SocialImpactModule {}

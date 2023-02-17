import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';
import { BannersModule } from '@elewa-group/features/components/banners';

import { SocialImpactRoutingModule } from './social-impact.routing';

@NgModule({
  imports: [CommonModule,SocialImpactRoutingModule, BannersModule],
  declarations: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { BannersModule } from '@elewa-group/features/components/banners';
import { SocialImpactCooperativeComponent } from './pages/components/social-impact-cooperative/social-impact-cooperative.component';
@NgModule({
  imports: [CommonModule,SocialImpactRoutingModule,BannersModule],
  declarations: [SocialImpactPageComponent, SocialImpactCooperativeComponent],
})
export class SocialImpactModule {}

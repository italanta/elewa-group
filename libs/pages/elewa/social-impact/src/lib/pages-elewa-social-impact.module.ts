import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';

import { LayoutModule } from '@elewa-group/elements/layout';


@NgModule({
  imports: [CommonModule,SocialImpactRoutingModule, LayoutModule],
  declarations: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

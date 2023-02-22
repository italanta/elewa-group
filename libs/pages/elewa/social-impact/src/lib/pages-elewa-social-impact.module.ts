import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactPeopleSectionComponent } from './social-impact-people-section/social-impact-people-section.component';

import { BannersModule } from '@elewa-group/features/components/banners';

import { SocialImpactRoutingModule } from './social-impact.routing';

@NgModule({
  imports: [CommonModule, BannersModule, SocialImpactRoutingModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactPeopleSectionComponent,
  ],
  exports: [SocialImpactPageComponent, SocialImpactPeopleSectionComponent],
})
export class SocialImpactModule {}

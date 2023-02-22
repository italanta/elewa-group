import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { SocialImpactPeopleSectionComponent } from './components/social-impact-people-section/social-impact-people-section.component';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, SocialImpactRoutingModule],
  declarations: [
    SocialImpactPageComponent,
    SocialImpactPeopleSectionComponent,
  ],
  exports: [SocialImpactPageComponent, SocialImpactPeopleSectionComponent],
})
export class SocialImpactModule {}

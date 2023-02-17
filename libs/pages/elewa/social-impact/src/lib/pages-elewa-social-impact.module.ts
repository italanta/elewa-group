import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleSectionComponent } from './component/people-section/people-section.component';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';

@NgModule({
  imports: [CommonModule, SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent, PeopleSectionComponent],
})

export class SocialImpactModule {}

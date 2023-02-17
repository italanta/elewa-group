import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleSectionComponent } from './component/people-section/people-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleSectionComponent],
})
export class PagesElewaSocialImpactModule {}
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';

@NgModule({
  imports: [CommonModule,SocialImpactRoutingModule],
  declarations: [SocialImpactPageComponent],
})
export class SocialImpactModule {}

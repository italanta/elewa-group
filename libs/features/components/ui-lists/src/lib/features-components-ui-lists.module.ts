import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaGroupVerticalListOneComponent } from './elewa-group-vertical-list-one/elewa-group-vertical-list-one.component';
import { ElewaHorizontalTimelineCarouselComponent } from './elewa-horizontal-timeline-carousel/elewa-horizontal-timeline-carousel.component';
import { ElewaGroupHorizontalListOrgsComponent } from './elewa-group-horizontal-list-orgs/elewa-group-horizontal-list-orgs.component';
import { ElewaGroupSocialImpactProjectsSectionComponent } from './elewa-group-social-impact-projects-section/elewa-group-social-impact-projects-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
    ElewaHorizontalTimelineCarouselComponent,    
    ElewaGroupSocialImpactProjectsSectionComponent,
  ],
  exports: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
    ElewaHorizontalTimelineCarouselComponent,
    ElewaGroupSocialImpactProjectsSectionComponent
  ],
})
export class UiListsModule {}

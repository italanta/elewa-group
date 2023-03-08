import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaGroupVerticalListOneComponent } from './elewa-group-vertical-list-one/elewa-group-vertical-list-one.component';
import { ElewaHorizontalTimelineCarouselComponent } from './elewa-horizontal-timeline-carousel/elewa-horizontal-timeline-carousel.component';
import { ElewaGroupHorizontalListOrgsComponent } from './elewa-group-horizontal-list-orgs/elewa-group-horizontal-list-orgs.component';
import { ElewaGroupArticleListComponent } from './elewa-group-article-list/elewa-group-article-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
    ElewaHorizontalTimelineCarouselComponent,
    ElewaGroupArticleListComponent,
  ],
  exports: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
    ElewaHorizontalTimelineCarouselComponent,
    ElewaGroupArticleListComponent,
  ],
})
export class UiListsModule {}

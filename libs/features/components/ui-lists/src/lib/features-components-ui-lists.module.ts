import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupVerticalListOneComponent } from './elewa-group-vertical-list-one/elewa-group-vertical-list-one.component';
import { ElewaHorizontalTimelineCarouselComponent } from './elewa-horizontal-timeline-carousel/elewa-horizontal-timeline-carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupVerticalListOneComponent,
    ElewaHorizontalTimelineCarouselComponent,
  ],
  exports: [ElewaGroupVerticalListOneComponent],
})
export class UiListsModule {}

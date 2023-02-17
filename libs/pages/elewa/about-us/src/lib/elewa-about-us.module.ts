import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

import { AboutUsRoutingModule } from './about-us.routing';
import { HistoryCarouselComponent } from './components/history-carousel/history-carousel.component';
import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
import { AboutUsHistoryCarouselComponent } from './components/about-us-history-carousel/about-us-history-carousel.component';
import { ElewaHorizontalTimelineCarouselComponent } from 'libs/features/components/ui-lists/src/lib/elewa-horizontal-timeline-carousel/elewa-horizontal-timeline-carousel.component';

@NgModule({
  imports: [CommonModule, LayoutModule, AboutUsRoutingModule],
  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
    AboutUsPageComponent,
    HistoryCarouselComponent,
    ElewaGroupImageAndTextBannerComponent,
    AboutUsHistoryCarouselComponent,
    ElewaHorizontalTimelineCarouselComponent
  ],
  exports: [TeamMembersCarouselComponent, HistoryCarouselComponent, AboutUsHistoryCarouselComponent],
})
export class AboutUsModule {}

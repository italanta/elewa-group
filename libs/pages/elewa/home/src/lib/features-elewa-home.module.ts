import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HorizontalTimelineCarouselComponent } from 'libs/features/components/ui-lists/src/lib/components/elewa-group-horizontal-timeline-carousel/elewa-group-horizontal-timeline-carousel.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    HorizontalTimelineCarouselComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent, HorizontalTimelineCarouselComponent],

})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import {ElewaHorizontalTimelineCarouselComponent} from 'libs/features/components/ui-lists/src/lib/elewa-horizontal-timeline-carousel/elewa-horizontal-timeline-carousel.component'

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
    ElewaHorizontalTimelineCarouselComponent
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent, ElewaHorizontalTimelineCarouselComponent],
})
export class HomePageModule {}

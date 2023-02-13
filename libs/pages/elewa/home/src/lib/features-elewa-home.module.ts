import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { LayoutModule } from '@elewa-group/elements/layout';
import { HorizontalTimelineCarouselComponent } from 'libs/features/components/ui-lists/src/lib/components/elewa-group-horizontal-timeline-carousel/elewa-group-horizontal-timeline-carousel.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries


@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent,HorizontalTimelineCarouselComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent,HorizontalTimelineCarouselComponent],
})
export class HomePageModule {}

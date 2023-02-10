import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { LayoutModule } from '@elewa-group/elements/layout';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ElewaHorizontalTimelineCarouselComponent } from 'libs/features/components/ui-lists/src/lib/components/elewa-horizontal-timeline-carousel/elewa-horizontal-timeline-carousel.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent,ElewaHorizontalTimelineCarouselComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent,ElewaHorizontalTimelineCarouselComponent],
})
export class HomePageModule {}

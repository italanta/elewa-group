import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent,ElewaGroupImageAndTextBannerComponent],

import { LayoutModule } from '@elewa-group/elements/layout';

  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}

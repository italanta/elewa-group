import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { AboutUsModule } from '@elewa-group/pages/elewa/about-us';
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AboutUsModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent],
})
export class HomePageModule {}

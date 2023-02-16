import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ImpactComponent } from './components/impact/impact.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { BannersModule } from '@elewa-group/features/components/banners';
@NgModule({
  imports: [CommonModule, LayoutModule, HomeRoutingModule, ButtonsModule, BannersModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    ImpactComponent,
  ],
  exports: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
})
export class HomePageModule {}

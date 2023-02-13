import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import{ButtonsModule}from '@elewa-group/features/components/buttons'

import { ImpactSectionComponent } from './components/home-hero-section/impact-section/impact-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';

@NgModule({
  imports: [CommonModule, LayoutModule, ButtonsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    ImpactSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomeJobsSectionComponent],
})
export class HomePageModule {}

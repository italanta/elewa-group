import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { HomeImpactSectionComponent } from './components/home-impact-section/home-impact-section.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
@NgModule({
  imports: [CommonModule, LayoutModule, HomeRoutingModule, ButtonsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    HomeImpactSectionComponent,
  ],
  exports: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    HomeImpactSectionComponent,
  ],
})
export class HomePageModule {}

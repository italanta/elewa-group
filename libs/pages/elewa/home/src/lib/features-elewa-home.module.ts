import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElewaHomePageLanderComponent } from './components/elewa-home-page-lander/elewa-home-page-lander.component';
@NgModule({
  imports: [CommonModule, LayoutModule, HomeRoutingModule, UiListsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    ElewaHomePageLanderComponent,
  ],
  exports: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
})
export class HomePageModule {}

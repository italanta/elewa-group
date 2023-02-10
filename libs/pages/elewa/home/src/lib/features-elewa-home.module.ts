import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from '@elewa-group/features/components/cards';

import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    ActivitySectionComponent
  ],
  exports: [HomePageComponent],

})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { CardsModule } from 'libs/features/components/cards/src/lib/features-components-cards.module';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
@NgModule({

  imports: [CommonModule, LayoutModule,CardsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    ActivitySectionComponent,
    HomeJobsSectionComponent
  
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent],

})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { CardsModule } from '@elewa-group/features/components/cards';
import { PrevDirective } from './components/Directives/prev.directive';
import { NextDirective } from './components/Directives/next.directive';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CardsModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    ActivitySectionComponent,
    NextDirective,
    PrevDirective,
    
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent,ActivitySectionComponent],

})
export class HomePageModule {}

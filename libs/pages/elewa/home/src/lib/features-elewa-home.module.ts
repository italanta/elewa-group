import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { CardsModule } from '@elewa-group/features/components/cards';
import { ButtonsModule }from '@elewa-group/features/components/buttons'

import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { TeamAndPartnersComponent } from './components/team-and-partners/team-and-partners.component';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { HomePageLanderComponent } from './components/home-page-lander/home-page-lander.component';



import { HomePageComponent } from './pages/home-page/home-page.component';

import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';

import { HomeRoutingModule } from './home.routing';
import { ImpactSectionComponent } from './components/impact-section/impact-section.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ButtonsModule,
    NgOptimizedImage,
    CardsModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    ImpactSectionComponent,
    TeamAndPartnersComponent,
    ActivitySectionComponent,
    HomePageLanderComponent,
    NextDirective,
    PrevDirective,
   
  ],
  exports: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    HomePageLanderComponent,
  ],
})
export class HomePageModule {}

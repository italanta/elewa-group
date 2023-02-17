import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { TeamAndPartnersComponent } from './components/team-and-partners/team-and-partners.component';

import { HomeRoutingModule } from './home.routing';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { CardsModule } from '@elewa-group/features/components/cards';
import { PrevDirective } from './components/Directives/prev.directive';
import { NextDirective } from './components/Directives/next.directive';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    NgOptimizedImage,
    CardsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    TeamAndPartnersComponent,
    ActivitySectionComponent,
    NextDirective,
    PrevDirective    
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomeJobsSectionComponent, TeamAndPartnersComponent, ActivitySectionComponent, NextDirective, PrevDirective],
})
export class HomePageModule {}

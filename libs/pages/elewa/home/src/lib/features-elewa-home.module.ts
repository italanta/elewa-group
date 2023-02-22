import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { CardsModule } from '@elewa-group/features/components/cards';
import { SocialImpactModule } from '@elewa-group/pages/elewa/social-impact'

import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { TeamAndPartnersComponent } from './components/team-and-partners/team-and-partners.component';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';

import { HomeRoutingModule } from './home.routing';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    NgOptimizedImage,
    CardsModule,
    HomeRoutingModule,
    SocialImpactModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    TeamAndPartnersComponent,
    ActivitySectionComponent,
    NextDirective,
    PrevDirective
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, TeamAndPartnersComponent, ActivitySectionComponent, NextDirective, PrevDirective],
})
export class HomePageModule { }

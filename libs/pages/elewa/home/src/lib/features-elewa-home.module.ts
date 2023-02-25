import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { CardsModule } from '@elewa-group/features/components/cards';
import { BannersModule } from '@elewa-group/features/components/banners'

import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { TeamAndPartnersComponent } from './components/team-and-partners/team-and-partners.component';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { HomePageLanderComponent} from './components/home-page-lander/home-page-lander.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { HomeImpactSectionComponent } from './components/home-impact-section/home-impact-section.component';

import { PrevDirective } from './directives/prev.directive';
import { NextDirective } from './directives/next.directive';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    NgOptimizedImage,
    CardsModule,
    ButtonsModule,
    HomeRoutingModule,
    BannersModule
    
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    ActivitySectionComponent,
    TeamAndPartnersComponent,
    ActivitySectionComponent,
    HomePageLanderComponent,
    HomeImpactSectionComponent,
    NextDirective,
    PrevDirective
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent,HomePageLanderComponent],
})
export class HomePageModule { }

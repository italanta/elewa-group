import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { SocialImpactFooterSectionComponent } from 'libs/pages/elewa/social-impact/src/lib/social-impact-footer-section/social-impact-footer-section.component';
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    SocialImpactFooterSectionComponent
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent],
})
export class HomePageModule {}

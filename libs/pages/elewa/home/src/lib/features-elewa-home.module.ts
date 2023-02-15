import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElewaGroupVerticalListAllComponent } from 'libs/features/components/ui-lists/src/lib/elewa-group-vertical-list-all/elewa-group-vertical-list-all.component';
import { ElewaGroupVerticalListOneComponent } from 'libs/features/components/ui-lists/src/lib/elewa-group-vertical-list-one/elewa-group-vertical-list-one.component';
import { ElewaGroupHorizontalListOrgsComponent } from 'libs/features/components/ui-lists/src/lib/elewa-group-horizontal-list-orgs/elewa-group-horizontal-list-orgs.component';
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
    ElewaGroupVerticalListAllComponent,
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent],

})
export class HomePageModule {}

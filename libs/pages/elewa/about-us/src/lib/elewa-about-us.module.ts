import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ElewaAboutUsLocationSectionComponent } from './components/elewa-about-us-location-section/elewa-about-us-location-section.component';
import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HistoryComponent } from './components/history/history.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { LayoutModule } from '@elewa-group/elements/layout';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';


import { NextDirective } from './directives/next.directive';

import { PrevDirective } from './directives/prev.directive';




@NgModule({
  imports: [
    GoogleMapsModule,
    ButtonsModule,
    CommonModule,
    LayoutModule,
    UiListsModule,
  ],
  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
    AboutUsPageComponent,
    ElewaAboutUsLocationSectionComponent,
    HistoryComponent,
  ],
  exports: [TeamMembersCarouselComponent],
})
export class AboutUsModule {}

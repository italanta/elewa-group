import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ElewaAboutUsLocationSectionComponent } from './components/elewa-about-us-location-section/elewa-about-us-location-section.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { LayoutModule } from '@elewa-group/elements/layout';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { NextDirective } from './directives/next.directive';

import { PrevDirective } from './directives/prev.directive';

import { AboutUsRoutingModule } from './about-us.routing';
import { AboutUsWeCareComponent } from './components/about-us-we-care/about-us-we-care.component';
import { ElewaVerticalIconAndTextComponent } from 'libs/features/components/cards/src/lib/cards/elewa-vertical-icon-and-text/elewa-vertical-icon-and-text.component';
import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  imports: [
    GoogleMapsModule,
    ButtonsModule,
    CommonModule,
    LayoutModule,
    AboutUsRoutingModule,
    CardsModule
  ],
  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
    AboutUsPageComponent,
    ElewaAboutUsLocationSectionComponent,
    AboutUsWeCareComponent,
  ],
  exports: [TeamMembersCarouselComponent, ElewaAboutUsLocationSectionComponent, AboutUsWeCareComponent, ElewaVerticalIconAndTextComponent],
})
export class AboutUsModule {}

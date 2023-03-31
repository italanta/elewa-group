import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { MaterialBricksModule, MaterialDesignModule } from '@iote/bricks-angular';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { CardsModule } from '@elewa-group/features/components/cards';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';
import { ElewaGroupTeamMemberComponent } from './components/elewa-group-team-member/elewa-group-team-member.component';
import { AboutUsHistoryCarouselComponent } from './components/about-us-history-carousel/about-us-history-carousel.component';
import { AboutUsWeCareComponent } from './components/about-us-we-care/about-us-we-care.component';
import { ElewaAboutUsLocationSectionComponent } from './components/elewa-about-us-location-section/elewa-about-us-location-section.component';

import { BannersModule } from '@elewa-group/features/components/banners';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

import { AboutUsRoutingModule } from './about-us.routing';


@NgModule({
  imports: [
    GoogleMapsModule,
    ButtonsModule,

    MaterialDesignModule,
    MaterialBricksModule,

    CommonModule,
    LayoutModule,
    AboutUsRoutingModule,
    UiListsModule,
    CardsModule,
    BannersModule
  ],

  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
    AboutUsPageComponent,
    AboutUsHistoryCarouselComponent,
    ElewaAboutUsLocationSectionComponent,
    AboutUsWeCareComponent,
    ElewaGroupTeamMemberComponent
  ],
  exports: [TeamMembersCarouselComponent, ElewaAboutUsLocationSectionComponent],
})
export class AboutUsModule {}

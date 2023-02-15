import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

import { AboutUsRoutingModule } from './about-us.routing';
import { WeCareComponent } from './components/we-care/we-care.component';

@NgModule({
  imports: [CommonModule, LayoutModule, AboutUsRoutingModule],
  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
    AboutUsPageComponent,
    WeCareComponent,
  ],
  exports: [TeamMembersCarouselComponent],
})
export class AboutUsModule {}

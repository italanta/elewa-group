import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
  ],
  exports: [TeamMembersCarouselComponent],
})
export class AboutUsModule {}

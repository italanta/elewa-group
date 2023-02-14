import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsLocationSectionComponent } from './about-us-location-section/about-us-location-section.component';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamMembersCarouselComponent,AboutUsLocationSectionComponent, NextDirective, PrevDirective],
  exports: [TeamMembersCarouselComponent, AboutUsLocationSectionComponent]
})
export class AboutUsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { ElewaCultureAndValuesComponent } from './components/elewa-culture-and-values/elewa-culture-and-values.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamMembersCarouselComponent, NextDirective, PrevDirective, ElewaCultureAndValuesComponent],
  exports: [TeamMembersCarouselComponent]
})
export class AboutUsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './components/mission/mission.component';
import { CardsModule } from '@elewa-group/features/components/cards';

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

@NgModule({
  imports: [CommonModule,CardsModule],

  declarations: [TeamMembersCarouselComponent, NextDirective, PrevDirective,MissionComponent],
  exports: [TeamMembersCarouselComponent,MissionComponent]
})
export class AboutUsModule { }

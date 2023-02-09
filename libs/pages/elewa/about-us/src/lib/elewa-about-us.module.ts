import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMembersComponent } from './team-members/team-members.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamMembersComponent],
  exports: [TeamMembersComponent],
})
export class AboutUsModule {}

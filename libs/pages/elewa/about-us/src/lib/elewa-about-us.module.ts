import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleImpactSectionComponent } from './people-impact-section/people-impact-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleImpactSectionComponent],
  exports: [PeopleImpactSectionComponent]
})
export class AboutUsModule {}

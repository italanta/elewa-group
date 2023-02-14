import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleImpactSectionComponent } from './people-impact-section/people-impact-section.component';
import { CardsModule } from '@elewa-group/features/components/cards';
@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [PeopleImpactSectionComponent],
  exports: [PeopleImpactSectionComponent]
})
export class AboutUsModule {}

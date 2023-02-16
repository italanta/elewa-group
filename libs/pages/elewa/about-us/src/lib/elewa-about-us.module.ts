import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleImpactSectionComponent } from './people-impact-section/people-impact-section.component';
import { BannersModule} from '@elewa-group/features/components/banners';
@NgModule({
  imports: [CommonModule, BannersModule],
  declarations: [PeopleImpactSectionComponent],
  exports: [PeopleImpactSectionComponent]
})
export class AboutUsModule {}

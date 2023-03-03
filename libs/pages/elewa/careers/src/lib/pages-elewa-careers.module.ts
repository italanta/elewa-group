import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { CareersHeroComponent } from './components/careers-hero/careers-hero.component';
import { CareersVacanciesComponent} from './components/careers-vacancies/careers-vacancies.component';
import { CareersValuePropositionComponent } from './components/careers-value-proposition/careers-value-proposition.component';

import { CareersRoutingModule } from './careers.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, CareersRoutingModule, ButtonsModule],
  declarations: [CareersPageComponent, CareersVacanciesComponent, CareersHeroComponent, CareersValuePropositionComponent],
})
export class CareersModule {}

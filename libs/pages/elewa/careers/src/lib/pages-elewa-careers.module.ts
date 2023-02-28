import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { CareersPageComponent } from './pages/careers-page/careers-page.component';

import { CareersRoutingModule } from './careers.routing';
import { CareersVacanciesComponent } from './careers-vacancies/careers-vacancies.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  imports: [CommonModule, LayoutModule, CareersRoutingModule,ButtonsModule],
  declarations: [CareersPageComponent, CareersVacanciesComponent],
})
export class CareersModule {}

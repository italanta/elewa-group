import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { CareersPageComponent } from './pages/careers-page/careers-page.component';

import { CareersRoutingModule } from './careers.routing';
import { CareersValuePropositionComponent } from './components/careers-value-proposition/careers-value-proposition.component';

@NgModule({
  imports: [CommonModule, LayoutModule, CareersRoutingModule],
  declarations: [CareersPageComponent, CareersValuePropositionComponent],
})
export class CareersModule {}

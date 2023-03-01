import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { CareersPageComponent } from './pages/careers-page/careers-page.component';

import { CareersRoutingModule } from './careers.routing';
import { CareersHeroComponent } from './components/careers-hero/careers-hero.component';
import {ButtonsModule} from '@elewa-group/features/components/buttons';
import { CareersValuePropositionComponent } from './components/careers-value-proposition/careers-value-proposition.component';

@NgModule({
  imports: [CommonModule, LayoutModule, CareersRoutingModule, ButtonsModule],
  declarations: [CareersPageComponent, CareersHeroComponent, CareersValuePropositionComponent],
})
export class CareersModule {}

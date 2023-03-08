import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { LayoutModule } from '@elewa-group/elements/layout';

import { VentureLabDetailPageComponent } from './pages/venture-lab-detail-page/venture-lab-detail-page.component';
import { VentureDetailFoundersComponent } from './components/venture-detail-founders/venture-detail-founders.component';
import { VentureDetailHeroComponent } from './components/venture-detail-hero/venture-detail-hero.component';

import { VentureLabDetailRoutingModule } from './venture-lab-detail.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, ButtonsModule, VentureLabDetailRoutingModule],
  declarations: [VentureLabDetailPageComponent, VentureDetailFoundersComponent, VentureDetailHeroComponent]
})

export class PagesElewaVentureLabDetailModule {}

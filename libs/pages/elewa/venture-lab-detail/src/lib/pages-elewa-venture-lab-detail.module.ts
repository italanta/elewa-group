import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { ButtonsModule } from '@elewa-group/features/components/buttons'; 
import { BannersModule } from '@elewa-group/features/components/banners';

import { VentureLabDetailPageComponent } from './pages/venture-lab-detail-page/venture-lab-detail-page.component';
import { VentureLabDetailRoutingModule } from './venture-lab-detail.routing';
import { VentureDetailHeroComponent } from './components/venture-detail-hero/venture-detail-hero.component';

@NgModule({
  imports: [CommonModule, LayoutModule, ButtonsModule, BannersModule, VentureLabDetailRoutingModule],

  declarations: [VentureLabDetailPageComponent, VentureDetailHeroComponent],
})
export class PagesElewaVentureLabDetailModule {}

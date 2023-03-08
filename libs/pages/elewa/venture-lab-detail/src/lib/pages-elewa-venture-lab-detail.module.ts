import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { VentureLabDetailRoutingModule } from './venture-lab-detail.routing';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { VentureLabDetailPageComponent } from './pages/venture-lab-detail-page/venture-lab-detail-page.component';
import { VentureDetailHeroComponent } from './components/venture-detail-hero/venture-detail-hero.component';

@NgModule({
  imports: [CommonModule, LayoutModule, VentureLabDetailRoutingModule,ButtonsModule],

  declarations: [VentureLabDetailPageComponent, VentureDetailHeroComponent],
})
export class PagesElewaVentureLabDetailModule {}

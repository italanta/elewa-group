import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { VentureLabDetailPageComponent } from './pages/venture-lab-detail-page/venture-lab-detail-page.component';

import { VentureLabsRoutingModule } from './venture-labs.routing';

@NgModule({
  imports: [CommonModule,LayoutModule, VentureLabsRoutingModule],
  declarations: [VentureLabDetailPageComponent],
})
export class PagesElewaVentureLabDetailModule {}

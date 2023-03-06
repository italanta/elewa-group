import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';

import { VentureLabDetailPageComponent } from './pages/venture-lab-detail-page/venture-lab-detail-page.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [VentureLabDetailPageComponent],
})
export class VentureLabDetailModule {}


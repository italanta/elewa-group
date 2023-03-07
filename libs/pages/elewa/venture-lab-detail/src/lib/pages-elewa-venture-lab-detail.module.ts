import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule} from '@elewa-group/elements/layout';
import { VentureLabDetailPageComponent} from './pages/venture-lab-detail-page/venture-lab-detail-page.component';
import { VentureLabDetailRoutingModule } from './venture-lab-detail.routing'

@NgModule({
  imports: [CommonModule,LayoutModule,VentureLabDetailRoutingModule],

  declarations: [VentureLabDetailPageComponent],

})
export class PagesElewaVentureLabDetailModule {}

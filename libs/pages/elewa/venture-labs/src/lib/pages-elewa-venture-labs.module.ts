import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureLabsRoutingModule } from './venture-labs.routing';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsInfoComponent } from './components/venture-labs-info/venture-labs-info.component';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';

@NgModule({
  imports: [CommonModule,VentureLabsRoutingModule,LayoutModule,BannersModule],
  declarations: [VentureLabsPageComponent,VentureLabsDiscoverComponent,VentureLabsInfoComponent],
})
export class PagesElewaVentureLabsModule {}

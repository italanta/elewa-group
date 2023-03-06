import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsRoutingModule } from './venture-labs.routing';
import { LayoutModule } from '@elewa-group/elements/layout';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, VentureLabsRoutingModule, LayoutModule, BannersModule],
  declarations: [VentureLabsPageComponent, VentureLabsDiscoverComponent],
})
export class PagesElewaVentureLabsModule {}

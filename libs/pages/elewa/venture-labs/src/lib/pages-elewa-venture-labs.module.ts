import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureLabsRoutingModule } from './venture-labs.routing';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsStartupsComponent } from './components/venture-labs-startups/venture-labs-startups.component';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';

@NgModule({
  imports: [CommonModule, VentureLabsRoutingModule, LayoutModule,BannersModule],
  declarations: [VentureLabsPageComponent, VentureLabsStartupsComponent,VentureLabsDiscoverComponent],

})
export class PagesElewaVentureLabsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { CardsModule } from '@elewa-group/features/components/cards'



import { VentureLabsStartupsComponent } from './components/venture-labs-startups/venture-labs-startups.component';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';

import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';

import { VentureLabsRoutingModule } from './venture-labs.routing';




@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    BannersModule,
    CardsModule,
    VentureLabsRoutingModule,
  ],
  declarations: [
    VentureLabsPageComponent,
    VentureLabsDiscoverComponent,
    VentureLabsStartupsComponent,
  ],
})
export class PagesElewaVentureLabsModule {}

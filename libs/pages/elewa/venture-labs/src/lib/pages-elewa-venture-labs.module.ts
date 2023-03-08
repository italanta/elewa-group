import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { CardsModule } from '@elewa-group/features/components/cards';

import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsHeroComponent } from './components/venture-labs-hero/venture-labs-hero.component';
import { VentureLabsInfoComponent } from './components/venture-labs-info/venture-labs-info.component';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';

import { VentureLabsRoutingModule } from './venture-labs.routing';
import { VentureLabsStartupsComponent } from './components/venture-labs-startups/venture-labs-startups.component';
import { VentureLabsInvestmentsComponent } from './components/venture-labs-investments/venture-labs-investments.component';

@NgModule({
  imports: [
    CommonModule,
    VentureLabsRoutingModule,
    LayoutModule,
    BannersModule,
    CardsModule,
  ],
  declarations: [
    VentureLabsHeroComponent,
    VentureLabsDiscoverComponent,
    VentureLabsInfoComponent,
    VentureLabsPageComponent,
    VentureLabsStartupsComponent,
    VentureLabsInvestmentsComponent,
  ],
})
export class PagesElewaVentureLabsModule {}

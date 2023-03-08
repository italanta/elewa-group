import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsRoutingModule } from './venture-labs.routing';
import { LayoutModule } from '@elewa-group/elements/layout';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';
import { BannersModule } from '@elewa-group/features/components/banners';
import { VentureLabsStartupsComponent } from './components/venture-labs-startups/venture-labs-startups.component';
import { VentureLabsHeroComponent } from './components/venture-labs-hero/venture-labs-hero.component';
import { VentureLabsInfoComponent } from './components/venture-labs-info/venture-labs-info.component';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';

import { VentureLabsRoutingModule } from './venture-labs.routing';

@NgModule({
  imports: [
    CommonModule,
    VentureLabsRoutingModule,
    LayoutModule,
    BannersModule,
  ],
  declarations: [
    VentureLabsPageComponent,
    VentureLabsDiscoverComponent,
    VentureLabsStartupsComponent,
    VentureLabsHeroComponent,
    VentureLabsDiscoverComponent,
    VentureLabsInfoComponent,
    VentureLabsPageComponent,
  ],
})
export class PagesElewaVentureLabsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';
import { VentureLabsRoutingModule } from './venture-labs.routing';
import { LayoutModule } from '@elewa-group/elements/layout';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';
import { BannersModule } from '@elewa-group/features/components/banners';
import { VentureLabsHeroComponent } from './components/venture-labs-hero/venture-labs-hero.component';
import { VentureLabsInfoComponent } from './components/venture-labs-info/venture-labs-info.component';
import { VentureLabsInvestmentsComponent } from './components/venture-labs-investments/venture-labs-investments.component';

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
    VentureLabsHeroComponent,
    VentureLabsInfoComponent,
    VentureLabsInvestmentsComponent,
  ],
})
export class PagesElewaVentureLabsModule {}

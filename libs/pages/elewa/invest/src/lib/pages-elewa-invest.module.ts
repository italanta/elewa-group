import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestCreativeHubSectionComponent } from './components/elewa-invest-creative-hub-section/elewa-invest-creative-hub-section.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, InvestRoutingModule, BannersModule],
  declarations: [
    InvestPageComponent,
    ElewaInvestDetailSectionComponent,
    ElewaInvestCreativeHubSectionComponent,
  ]
})
export class InvestPageModule {}

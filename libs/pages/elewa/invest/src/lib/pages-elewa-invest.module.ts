import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestCreativeHubSectionComponent } from './components/elewa-invest-creative-hub-section/elewa-invest-creative-hub-section.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, InvestRoutingModule, BannersModule],
  declarations: [InvestPageComponent, ElewaInvestCreativeHubSectionComponent],
})
export class InvestPageModule {}

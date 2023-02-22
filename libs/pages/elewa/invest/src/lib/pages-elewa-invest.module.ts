import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';
import { BannersModule } from '@elewa-group/features/components/banners';
import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestCreativeHubSectionComponent } from './pages/elewa-invest-creative-hub-section/elewa-invest-creative-hub-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
@NgModule({
  imports: [CommonModule, InvestRoutingModule, BannersModule, LayoutModule],
  declarations: [InvestPageComponent, ElewaInvestCreativeHubSectionComponent],
  exports: [ElewaInvestCreativeHubSectionComponent],
})
export class InvestPageModule {}

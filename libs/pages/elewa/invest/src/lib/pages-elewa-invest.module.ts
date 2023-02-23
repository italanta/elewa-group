import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';

import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, InvestRoutingModule],
  declarations: [InvestPageComponent, ElewaInvestHeroComponent, ElewaInvestDetailSectionComponent],
})
export class InvestPageModule {}

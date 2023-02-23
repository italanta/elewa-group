import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersModule } from '@elewa-group/features/components/banners';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestStakeholderSectionComponent } from './components/elewa-invest-stakeholder-section/elewa-invest-stakeholder-section.component';

import { InvestRoutingModule } from './invest.routing';
@NgModule({
  imports: [CommonModule, BannersModule, InvestRoutingModule],
  declarations: [
    InvestPageComponent,
    ElewaInvestDetailSectionComponent,
    ElewaInvestStakeholderSectionComponent,
  ],
})
export class InvestPageModule {}

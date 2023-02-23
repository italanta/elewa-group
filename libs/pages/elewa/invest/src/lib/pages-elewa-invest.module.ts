import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersModule } from '@elewa-group/features/components/banners';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestInvestingInElewaSectionComponent } from './components/elewa-invest-investing-in-elewa-section/elewa-invest-investing-in-elewa-section.component';

@NgModule({
  imports: [CommonModule, BannersModule, InvestRoutingModule],
  declarations: [
    InvestPageComponent,
    ElewaInvestDetailSectionComponent,
    ElewaInvestInvestingInElewaSectionComponent,
  ],
})
export class InvestPageModule {}

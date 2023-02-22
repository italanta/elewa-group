import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersModule } from '@elewa-group/features/components/banners';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestStakeholderSectionComponent } from './components/elewa-invest-stakeholder-section/elewa-invest-stakeholder-section.component';


@NgModule({
  imports: [CommonModule, BannersModule, InvestRoutingModule],
  declarations: [InvestPageComponent, ElewaInvestStakeholderSectionComponent],
})
export class InvestPageModule {}

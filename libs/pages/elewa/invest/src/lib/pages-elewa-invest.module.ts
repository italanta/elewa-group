import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';

@NgModule({
  imports: [CommonModule, InvestRoutingModule],
  declarations: [InvestPageComponent, ElewaInvestDetailSectionComponent],
})
export class InvestPageModule {}

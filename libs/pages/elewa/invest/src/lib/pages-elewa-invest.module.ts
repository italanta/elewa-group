import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestInvestingInElewaSectionComponent } from './components/elewa-invest-investing-in-elewa-section/elewa-invest-investing-in-elewa-section.component';

@NgModule({
  imports: [CommonModule, InvestRoutingModule],
  declarations: [
    InvestPageComponent,
    ElewaInvestInvestingInElewaSectionComponent,
  ],
})
export class InvestPageModule {}

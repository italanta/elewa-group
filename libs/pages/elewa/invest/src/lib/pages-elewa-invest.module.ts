import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';


@NgModule({
  imports: [CommonModule, LayoutModule, InvestRoutingModule],
  declarations: [InvestPageComponent, ElewaInvestHeroComponent],
})
export class InvestPageModule {}

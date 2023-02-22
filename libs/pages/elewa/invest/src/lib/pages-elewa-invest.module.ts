import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';
import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';

@NgModule({
  imports: [CommonModule, InvestRoutingModule],
  declarations: [InvestPageComponent, ElewaInvestHeroComponent],
  exports: [InvestPageComponent],
})
export class InvestPageModule {}

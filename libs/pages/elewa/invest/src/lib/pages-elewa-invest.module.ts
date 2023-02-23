import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';

import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { InvestingInElewaComponent } from './components/investing-in-elewa/investing-in-elewa.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, InvestRoutingModule, ButtonsModule,BannersModule,LayoutModule],
  declarations: [InvestPageComponent, InvestingInElewaComponent,ElewaInvestDetailSectionComponent,ElewaInvestHeroComponent],

})
export class InvestPageModule {}

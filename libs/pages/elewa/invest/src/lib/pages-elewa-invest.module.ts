import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';
import { ElewaInvestCreativeHubSectionComponent } from './components/elewa-invest-creative-hub-section/elewa-invest-creative-hub-section.component';
import { ElewaInvestInvestingInElewaSectionComponent } from './components/elewa-invest-investing-in-elewa-section/elewa-invest-investing-in-elewa-section.component';

import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,

    BannersModule,

    InvestRoutingModule
  ],
  declarations: [
    InvestPageComponent, 
    ElewaInvestHeroComponent, 
    ElewaInvestDetailSectionComponent, 
    ElewaInvestCreativeHubSectionComponent,ElewaInvestInvestingInElewaSectionComponent],
})
export class InvestPageModule { }

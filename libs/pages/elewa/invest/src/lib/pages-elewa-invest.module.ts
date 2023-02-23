import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { BannersModule } from '@elewa-group/features/components/banners';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';

import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestInvestingInElewaSectionComponent } from './components/elewa-invest-investing-in-elewa-section/elewa-invest-investing-in-elewa-section.component';

@NgModule({
  imports: [
    CommonModule, 
    InvestRoutingModule, 
    ButtonsModule,
    BannersModule
  ],
  declarations: [
    InvestPageComponent,
    ElewaInvestInvestingInElewaSectionComponent,
    ElewaInvestHeroComponent,
    ElewaInvestDetailSectionComponent
  ],
  exports: [InvestPageComponent]
})
export class InvestPageModule {}

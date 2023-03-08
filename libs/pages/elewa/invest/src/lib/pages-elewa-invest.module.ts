import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ElewaInvestHeroComponent } from './components/elewa-invest-hero/elewa-invest-hero.component';
import { ElewaInvestCreativeHubSectionComponent } from './components/elewa-invest-creative-hub-section/elewa-invest-creative-hub-section.component';
import { ElewaInvestInvestingInElewaSectionComponent } from './components/elewa-invest-investing-in-elewa-section/elewa-invest-investing-in-elewa-section.component';
import { ElewaInvestCallToActionSectionComponent } from './components/elewa-invest-call-to-action-section/elewa-invest-call-to-action-section.component';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { ElewaInvestStakeholderSectionComponent } from './components/elewa-invest-stakeholder-section/elewa-invest-stakeholder-section.component';
import { ElewaInvestKeyFiguresSectionComponent } from './components/elewa-invest-key-figures-section/elewa-invest-key-figures-section.component';
import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, InvestRoutingModule,CardsModule],
  declarations: [
    InvestPageComponent,
    ElewaInvestHeroComponent,
    ElewaInvestDetailSectionComponent,
    ElewaInvestCreativeHubSectionComponent,
    ElewaInvestInvestingInElewaSectionComponent,
    ElewaInvestStakeholderSectionComponent,
    ElewaInvestCallToActionSectionComponent,
    ElewaInvestKeyFiguresSectionComponent,
  ],
})
export class InvestPageModule {}

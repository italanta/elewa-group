import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { BannersModule } from '@elewa-group/features/components/banners';

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
  ],
  exports: [InvestPageComponent]
})
export class InvestPageModule {}

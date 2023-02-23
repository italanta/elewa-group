import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { InvestingInElewaComponent } from './components/investing-in-elewa/investing-in-elewa.component';

@NgModule({
  imports: [CommonModule, InvestRoutingModule],
  declarations: [InvestPageComponent, InvestingInElewaComponent],
})
export class InvestPageModule {}

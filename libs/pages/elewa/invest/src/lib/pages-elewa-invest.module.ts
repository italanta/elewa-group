import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './pages/invest.routing';

@NgModule({
  imports: [CommonModule, InvestRoutingModule],
  declarations: [InvestPageComponent],
})
export class InvestPageModule {}

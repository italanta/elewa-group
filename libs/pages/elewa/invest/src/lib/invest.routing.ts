import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { InvestPageComponent } from './pages/invest-page/invest-page.component';



export const ELEWA_INVEST_ROUTES: Route[] = [

  { path: '', component: InvestPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_INVEST_ROUTES)],
  exports: [RouterModule]
})
export class InvestRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';


export const ELEWA_BRANDS_ROUTES: Route[] = [

  { path: '', component: ElewaBrandsPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_BRANDS_ROUTES)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { };



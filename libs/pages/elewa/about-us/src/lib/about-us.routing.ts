import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';


export const ELEWA_ABOUT_US_ROUTES: Route[] = [

  { path: '', component: AboutUsPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_ABOUT_US_ROUTES)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }

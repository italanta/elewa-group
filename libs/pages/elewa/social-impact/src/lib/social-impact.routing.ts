import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';



export const ELEWA_SOCIAL_IMPACT_ROUTES: Route[] = [

  { path: '', component: SocialImpactPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_SOCIAL_IMPACT_ROUTES)],
  exports: [RouterModule]
})
export class SocialImpactRoutingModule { }

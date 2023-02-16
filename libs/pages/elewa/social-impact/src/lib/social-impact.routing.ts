import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

export const ELEWA_HOME_ROUTES: Route[] = [

  { path: '', component: SocialImpactPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_HOME_ROUTES)],
  exports: [RouterModule]
})
export class SocialImpactModule { }

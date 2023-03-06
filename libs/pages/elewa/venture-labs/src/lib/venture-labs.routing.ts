import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';

export const ELEWA_VENTURE_ROUTES: Route[] = [
  { path: '', component: VentureLabsPageComponent }
]

@NgModule({
  imports:[
    RouterModule.forChild(ELEWA_VENTURE_ROUTES)
  ],
  exports: [RouterModule]
})

export class VentureLabsRoutingModule {  }
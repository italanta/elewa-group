import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { VentureLabsPageComponent } from './pages/venture-labs-page/venture-labs-page.component';

export const ELEWA_VENTURE_ROUTES: Route[] = [
  { path: '', component: VentureLabsPageComponent },
  {  path: ':id', loadChildren: () => import('libs/pages/elewa/venture-lab-detail/src/lib/pages-elewa-venture-lab-detail.module').then(m => m.PagesElewaVentureLabDetailModule)},
]

@NgModule({
  imports:[
    RouterModule.forChild(ELEWA_VENTURE_ROUTES)
  ],
  exports: [RouterModule]
})

export class VentureLabsRoutingModule {  }
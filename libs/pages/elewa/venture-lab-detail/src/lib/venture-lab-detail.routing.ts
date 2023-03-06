import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { VentureLabDetailPageComponent } from './pages/venture-lab-detail-page/venture-lab-detail-page.component';

export const ELEWA_VENTURE_DETAIL_ROUTES: Route[] = [
  { path: '', component:   VentureLabDetailPageComponent }
]

@NgModule({
  imports:[
    RouterModule.forChild(ELEWA_VENTURE_DETAIL_ROUTES)
  ],
  exports: [RouterModule]
})


export class VentureLabDetailRoutingModule{  }

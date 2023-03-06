import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { VentureLabDetailPageComponent } from "./pages/venture-lab-detail-page/venture-lab-detail-page.component";


export const ELEWA_VENTURE_LABS_ROUTES: Route[]= [

    { 'path':'',component:VentureLabDetailPageComponent }

]

@NgModule({
    imports:[RouterModule.forChild(ELEWA_VENTURE_LABS_ROUTES)],
    exports:[RouterModule]
})
export class VentureLabsRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { CareersPageComponent } from './pages/careers-page/careers-page.component';

export const ELEWA_CAREERS_ROUTES: Route[] = [
    {path: '', component: CareersPageComponent}
]
@NgModule({
    imports: [RouterModule.forChild(ELEWA_CAREERS_ROUTES)],
    exports: [RouterModule]
})

export class CareersRoutingModule { }

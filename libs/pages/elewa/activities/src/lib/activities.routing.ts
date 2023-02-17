import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';




export const ELEWA_ACTIVITIES_ROUTES: Route[] = [

  { path: '', component: ActivitiesPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_ACTIVITIES_ROUTES)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }

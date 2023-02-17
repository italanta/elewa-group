import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';

import { ActivitiesRoutingModule } from './activities.routing';


@NgModule({
  imports: [CommonModule,ActivitiesRoutingModule],
  declarations: [ActivitiesPageComponent],
})
export class ActivitiesModule {}

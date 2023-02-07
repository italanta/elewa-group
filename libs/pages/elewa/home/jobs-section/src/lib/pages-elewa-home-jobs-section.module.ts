import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsSectionComponent } from './jobs-section/jobs-section.component';
import { Routes, RouterModule } from '@angular/router';

// routes
const routes: Routes = [
  {
    path: 'jobs',
    component: JobsSectionComponent,
  },
];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  declarations: [JobsSectionComponent], 
  exports: [JobsSectionComponent], 
})
export class JobsSectionModule {}

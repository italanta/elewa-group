import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { JobsSectionComponent } from './components/jobs-section/jobs-section.component';
import { Routes, RouterModule } from '@angular/router';

// routes
const routes: Routes = [
  {
    path: 'jobs',
    component: JobsSectionComponent,
  },
];

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule.forRoot(routes)],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    JobsSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, JobsSectionComponent],
})
export class HomePageModule {}

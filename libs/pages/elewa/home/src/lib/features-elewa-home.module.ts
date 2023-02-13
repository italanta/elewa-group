import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { JobsSectionComponent } from './components/jobs-section/jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    JobsSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, JobsSectionComponent],
})
export class HomePageModule {}

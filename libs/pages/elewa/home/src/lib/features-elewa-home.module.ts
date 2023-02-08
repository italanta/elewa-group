import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeJobSectionComponent } from './pages/home-job-section/home-job-section.component';




@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent,HomeHeroSectionComponent,HomeJobSectionComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobSectionComponent],
})
export class HomePageModule {}

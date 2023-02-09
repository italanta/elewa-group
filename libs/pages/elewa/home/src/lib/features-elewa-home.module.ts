import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { Routes } from '@angular/router';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}

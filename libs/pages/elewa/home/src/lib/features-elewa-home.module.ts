import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from 'libs/elements/layout/src';
import { TeamAndPatnerComponent } from './team-and-patner/team-and-patner/team-and-patner.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    TeamAndPatnerComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,TeamAndPatnerComponent],
})
export class HomePageModule {}

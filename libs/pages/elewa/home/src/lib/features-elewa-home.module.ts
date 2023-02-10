import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';




@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent,HomeHeroSectionComponent,HomeJobSectionComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobSectionComponent],

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent],

})
export class HomePageModule {}

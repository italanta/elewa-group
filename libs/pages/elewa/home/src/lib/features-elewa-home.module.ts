import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';


@NgModule({
  imports: [CommonModule],

  declarations: [HomePageComponent ],
  exports: [HomePageComponent],

  declarations: [HomePageComponent, HomeHeroSectionComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}

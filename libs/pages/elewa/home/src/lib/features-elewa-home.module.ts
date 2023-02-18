import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BanersComponent } from './components/baners/baners.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent, BanersComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent,BanersComponent],
})
export class HomePageModule {}

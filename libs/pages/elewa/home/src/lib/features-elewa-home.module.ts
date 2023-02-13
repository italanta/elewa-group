import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import {BannersModule} from '@elewa-group/features/components/banners';



@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}

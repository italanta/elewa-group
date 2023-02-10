import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { FeaturesComponentsBannersModule } from '@elewa-group/features/components/banners';


@NgModule({
  imports: [CommonModule, LayoutModule, FeaturesComponentsBannersModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent ],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}

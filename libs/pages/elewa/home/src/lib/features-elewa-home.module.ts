import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomepageFooterComponent } from './components/homepage-footer/homepage-footer.component';
import { HomePageLanderComponent } from './components/home-page-lander/home-page-lander.component'

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomePageLanderComponent,
    HomeHeroSectionComponent,
    HomepageFooterComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomepageFooterComponent, HomePageLanderComponent],
})
export class HomePageModule {}

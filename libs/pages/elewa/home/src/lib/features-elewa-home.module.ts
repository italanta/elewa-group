import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomepageFooterComponent } from './components/homepage-footer/homepage-footer.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomepageFooterComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomepageFooterComponent],
})
export class HomePageModule {}

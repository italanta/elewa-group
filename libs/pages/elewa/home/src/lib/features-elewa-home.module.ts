import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomePageActivityComponent } from './home-page-activity/home-page-activity.component';
import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  imports: [CommonModule, LayoutModule, CardsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomePageActivityComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomePageActivityComponent],
})
export class HomePageModule {}

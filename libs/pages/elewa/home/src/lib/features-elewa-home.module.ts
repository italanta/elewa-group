import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { CardsModule } from 'libs/features/components/cards/src/lib/features-components-cards.module';

@NgModule({
  imports: [CommonModule, LayoutModule,CardsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    ActivitySectionComponent,
  
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}

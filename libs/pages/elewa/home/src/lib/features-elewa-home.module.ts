import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomeImpactSectionComponent } from './components/home-impact-section/home-impact-section.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  imports: [CommonModule, LayoutModule, ButtonsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeImpactSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomeImpactSectionComponent],
})
export class HomePageModule {}

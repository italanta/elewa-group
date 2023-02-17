import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home.routing';
import { BannersModule } from '@elewa-group/features/components/banners';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { HomePageImpactSectionComponent } from './components/home-page-impact-section/home-page-impact-section.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule,
    BannersModule,
    ButtonsModule,
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    HomePageImpactSectionComponent,
  ],
  exports: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { TeamAndPartnersComponent } from './components/team-and-partners/team-and-partners.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    TeamAndPartnersComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,TeamAndPartnersComponent],
})
export class HomePageModule {}

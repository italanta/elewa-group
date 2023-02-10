import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { HomeImpactComponent} from  '../../home-impact/home-impact.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent,HomeImpactComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeImpactComponent],
})
export class HomePageModule {}

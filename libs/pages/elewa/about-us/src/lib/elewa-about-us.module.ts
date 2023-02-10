import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { CardsModule } from '@elewa-group/features/components/cards';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [AboutUsPageComponent, AboutUsSectionComponent],
  exports: [AboutUsPageComponent],
})
export class AboutUsModule {}

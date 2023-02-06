import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeSectionComponent } from './pages/home-section/home-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent, HomeSectionComponent],
  exports: [HomePageComponent, HomeSectionComponent],
})
export class HomePageModule {}

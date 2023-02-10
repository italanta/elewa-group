import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaAboutUsLocationSectionComponent } from './elewa-about-us-location-section/elewa-about-us-location-section.component';

@NgModule({
  imports: [CommonModule,ElewaAboutUsLocationSectionComponent],
  exports: [ElewaAboutUsLocationSectionComponent],
  declarations: [ElewaAboutUsLocationSectionComponent],
})
export class AboutUsModule {}

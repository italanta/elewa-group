import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaAboutUsLocationSectionComponent } from './elewa-about-us-location-section/elewa-about-us-location-section.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  imports: [CommonModule,ElewaAboutUsLocationSectionComponent,GoogleMapsModule],
  exports: [ElewaAboutUsLocationSectionComponent],
  declarations: [ElewaAboutUsLocationSectionComponent],
})
export class AboutUsModule {}

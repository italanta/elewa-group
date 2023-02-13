import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ElewaAboutUsLocationSectionComponent } from './components/elewa-about-us-location-section/elewa-about-us-location-section.component';

import { GoogleMapsModule } from '@angular/google-maps'

import { ButtonsModule } from "@elewa-group/features/components/buttons"


@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    ButtonsModule],

  exports: [ElewaAboutUsLocationSectionComponent],

  declarations: [ElewaAboutUsLocationSectionComponent],
})

export class AboutUsModule {}
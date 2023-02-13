import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ElewaAboutUsLocationSectionComponent } from './components/elewa-about-us-location-section/elewa-about-us-location-section.component';

import { GoogleMapsModule } from '@angular/google-maps'

import { ButtonsModule } from "@elewa-group/features/components/buttons"

import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';

import { NextDirective } from './directives/next.directive';

import { PrevDirective } from './directives/prev.directive';

@NgModule({
  imports: [
    GoogleMapsModule,
    ButtonsModule,
    CommonModule],
    
  declarations: [
  TeamMembersCarouselComponent, 
  NextDirective, 
  PrevDirective, 
  ElewaAboutUsLocationSectionComponent],
  
  exports: [
  TeamMembersCarouselComponent, 
  ElewaAboutUsLocationSectionComponent]
})
export class AboutUsModule { }

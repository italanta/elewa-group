import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-location-section',
  templateUrl: './elewa-about-us-location-section.component.html',
  styleUrls: ['./elewa-about-us-location-section.component.scss']
})

export class ElewaAboutUsLocationSectionComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: -1.256132162858307, lng: 36.80501589843353 },
    zoom : 14,
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false, 
    streetViewControl: false,
    fullscreenControl: false
  }

}

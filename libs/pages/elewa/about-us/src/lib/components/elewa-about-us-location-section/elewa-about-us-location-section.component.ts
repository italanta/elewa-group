import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-location-section',
  templateUrl: './elewa-about-us-location-section.component.html',
  styleUrls: ['./elewa-about-us-location-section.component.scss'],
})
export class ElewaAboutUsLocationSectionComponent implements OnInit {
  markerPositions: google.maps.LatLng;

  latitude = -1.256132162858307;
  longitude = 36.80501589843353;

  mapOptions: google.maps.MapOptions = {
    center: { lat: this.latitude, lng: this.longitude },
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
}

constructor() {}

ngOnInit(): void {
  this.markerPositions = new google.maps.LatLng(this.latitude, this.longitude)
}

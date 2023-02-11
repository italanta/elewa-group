import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-location-section',
  templateUrl: './elewa-about-us-location-section.component.html',
  styleUrls: ['./elewa-about-us-location-section.component.css']
})
export class ElewaAboutUsLocationSectionComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
 
  // constructor() { }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
 
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }
 
  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

}

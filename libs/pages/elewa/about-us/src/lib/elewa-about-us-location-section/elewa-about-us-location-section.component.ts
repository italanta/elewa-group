import { Component, OnInit } from '@angular/core';

import { Center } from './center';

@Component({
  selector: 'elewa-group-about-us-location-section',
  templateUrl: './elewa-about-us-location-section.component.html',
  styleUrls: ['./elewa-about-us-location-section.component.css']
})


export class ElewaAboutUsLocationSectionComponent implements OnInit {
  // constructor() {
  //   this.center: Center |
  //  }

  center: Center | undefined;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };
 
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

}

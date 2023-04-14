import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import * as AOS from 'aos';
@Component({
  selector: 'elewa-group-about-us-location-section',
  templateUrl: './elewa-about-us-location-section.component.html',
  styleUrls: ['./elewa-about-us-location-section.component.scss'],
})
export class ElewaAboutUsLocationSectionComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  mapsKey: string = 'AIzaSyCwsDfqJ1NniggfknX5YJUujY_mBAxG7SU';

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

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.mapsKey}`, 'callback')
        .pipe(
          tap(() => this.placeLocationMarker()),
          map(() => true),
          catchError(() => of(false)));
  }

  ngOnInit(): void {
    AOS.init({once: true});
  }

  placeLocationMarker() {
    this.markerPositions = new google.maps.LatLng(this.latitude, this.longitude)
  }

}
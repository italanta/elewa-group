# Proposal for possible maps api/service libraries (AboutUs Location Section)

This documentations shows findings on different maps api/service libraries that can be used to pinpoint a location on a map.

## 1. Angular Google Maps Components (AGM)

This component provides a Google Maps Angular component  (previously known as angular2-google-maps) that implements the Google Maps JavaScript API.
  


### Installation

`AGM` gets shipped via the Node Package Manager. So make sure that you have [NodeJS](https://nodejs.org) installed.  
You can install the package with the following command:

```shell
npm install @agm/core
```

### Setup @NgModule

Open src/app/app.module.ts and import the AgmCoreModule. You neeed to provide a Google Maps API key to be able to see a Map. Get an API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key).

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '<API KEY>'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

### Extending app component

Angular CLI already created an app component the we’ll now use to create our first google map. Open the file src/app/app.component.ts and modify it like below:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
}
```
### Template setup

Open the file src/app/app.component.html and paste the following content:


```html
<h1>{{ title }}</h1>

<!-- this creates a google map on the page with the given lat/lng from -->
<!-- the component as the initial center of the map: -->
<agm-map [latitude]="lat" [longitude]="lng">
  <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
</agm-map>
```

### Css file setup

It is really important that you define a height component `agm-map`. Otherwise, you won't see a map on the page!

Open the file src/app/app.component.css and paste the following content:

```css
agm-map {
  height: 300px;
}
```
You should also checkout the [Getting started](https://angular-maps.com/guides/getting-started/) guide for further information.

---
[Website](https://angular-maps.com/) | [Demo](https://stackblitz.com/edit/angular-google-maps-demo) | [API Documentation](https://angular-maps.com/api-docs/) 

---


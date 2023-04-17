import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleTagManagerModule } from 'angular-google-tag-manager';

import { IntercomModule } from 'ng-intercom';

import { MaterialDesignModule } from '@iote/bricks-angular';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import * as process from 'process';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MaterialDesignModule,

    IntercomModule.forRoot({
      appId:  process.env['APP_ID']!,
      updateOnRouterChange: true
    }),

    RouterModule,
    ScullyLibModule.forRoot({
      alwaysMonitor: true,
    }),

    GoogleTagManagerModule.forRoot({id: 'GTM-NMCRDT5'}),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

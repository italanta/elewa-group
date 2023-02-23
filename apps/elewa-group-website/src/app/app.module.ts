import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutUsModule } from '@elewa-group/pages/elewa/about-us';

import { MaterialDesignModule } from '@iote/bricks-angular';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    MaterialDesignModule,

    RouterModule,
    ScullyLibModule,

    AppRoutingModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

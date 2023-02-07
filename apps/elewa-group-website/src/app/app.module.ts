import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';
import { HeaderComponentModule } from '@elewa-group/elements/layout';
import { HomePageModule } from '@elewa-group/pages/elewa/home'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HeaderComponentModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

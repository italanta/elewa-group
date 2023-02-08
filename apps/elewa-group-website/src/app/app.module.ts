import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';
import { ElewaGroupImageAndTextBannerComponent } from 'libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';
@NgModule({
  declarations: [AppComponent,ElewaGroupImageAndTextBannerComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import {AboutUsModule} from '@elewa-group/pages/elewa/about-us'

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';
import { LayoutModule } from '@elewa-group/elements/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    HomePageModule,
    AboutUsModule,
    CardsModule,
    LayoutModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}

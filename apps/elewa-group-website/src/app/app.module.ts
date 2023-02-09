import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';
import { LayoutModule } from 'libs/elements/layout/src';
import {PagesElewaSocialImpactModule} from 'libs/pages/elewa/social-impact/src'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    CardsModule,
    LayoutModule,
    PagesElewaSocialImpactModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

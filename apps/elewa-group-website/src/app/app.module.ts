import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home'
import {CardsModule} from 'libs/features/components/cards/src/lib/cards/cards.module'
@NgModule({
  declarations: [AppComponent],
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

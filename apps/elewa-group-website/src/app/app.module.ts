import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';
import { HeaderModule } from '@elewa-group/elements/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HeaderModule,
    HomePageModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

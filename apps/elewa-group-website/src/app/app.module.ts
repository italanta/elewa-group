import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';

import { JobsSectionsComponent } from '@elewa-group/pages/elewa/home/jobs-section';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    JobsSectionsComponent,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';
import { LayoutModule } from '@elewa-group/elements/layout';

import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    CardsModule,
    ButtonsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

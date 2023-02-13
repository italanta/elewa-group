import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ButtonsModule } from '@elewa-group/features/components/buttons';

import { AppRoutingModule } from './app.routing';

import { AboutUsModule } from '@elewa-group/pages/elewa/about-us';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule,
    ScullyLibModule,
    HomePageModule,
    CardsModule,
    ButtonsModule,
    LayoutModule,
    AboutUsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from '@iote/bricks-angular';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import {AboutUsModule} from '@elewa-group/pages/elewa/about-us'

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    HomePageModule,
    AboutUsModule,

    ButtonsModule,
    LayoutModule

    MaterialDesignModule,

    RouterModule,
    ScullyLibModule,

    AppRoutingModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}

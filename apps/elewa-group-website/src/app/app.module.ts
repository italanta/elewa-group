import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from '@iote/bricks-angular';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { FeaturesComponentsBannersModule } from '@elewa-group/features/components/banners'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    MaterialDesignModule,

    RouterModule,
    ScullyLibModule,
    HomePageModule,
    CardsModule,
    ButtonsModule,
    LayoutModule,
    FeaturesComponentsBannersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

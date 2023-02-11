import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import {AboutUsModule} from '@elewa-group/pages/elewa/about-us'

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { LayoutModule } from '@elewa-group/elements/layout';

import {ElementsLayoutFooterModule} from '@elewa-group/elements/layout/footer'
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    HomePageModule,
    AboutUsModule,

    LayoutModule,
    ElementsLayoutFooterModule,
    ButtonsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}

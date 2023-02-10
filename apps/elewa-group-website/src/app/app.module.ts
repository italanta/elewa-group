import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import {AboutUsModule} from '@elewa-group/pages/elewa/about-us'

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ButtonsModule } from '@elewa-group/features/components/buttons';
import {ElementsLayoutFooterModule} from '@elewa-group/elements/layout/footer'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    HomePageModule,
    AboutUsModule,

    ButtonsModule,
    LayoutModule,
    ElementsLayoutFooterModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { FeaturesElewaHomeModule } from '@elewa-group/features/elewa/home'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    FeaturesElewaHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

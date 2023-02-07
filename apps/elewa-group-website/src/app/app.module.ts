import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, ScullyLibModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

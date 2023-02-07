import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';
import { HomePageModule } from '@elewa-group/pages/elewa/home';
import { JobSectionComponent}  from '@elewa-group/pages/elewa/home'
import { CardsModule } from '@elewa-group/features/components/cards';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    JobSectionComponent
    CardsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

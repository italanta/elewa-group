import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';
import {  HomeJobSectionComponent, HomePageModule } from '@elewa-group/pages/elewa/home';
import { CardsModule } from '@elewa-group/features/components/cards';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    HomeJobSectionComponent,
    CardsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

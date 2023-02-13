import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule,
    ScullyLibModule,
    HomePageModule,
    CardsModule,
    LayoutModule,
    
    
    ButtonsModule,
    LayoutModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

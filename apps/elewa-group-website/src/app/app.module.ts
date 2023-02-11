import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// import { FooterModule } from 'libs/pages/elewa/home/src/lib/pages/footer/footer.module';


// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TeamAndPartnersModule } from 'libs/pages/elewa/home/src/lib/pages/home-page/team-and-partners/team-and-partners.component.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    TeamAndPartnersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

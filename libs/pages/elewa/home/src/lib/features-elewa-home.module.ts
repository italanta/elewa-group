import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './pages/home-page/header/header.component';
import { AboutComponent } from './pages/home-page/About-culture/about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent,HeaderComponent,AboutComponent],
  exports: [ HomePageComponent ,HeaderComponent,AboutComponent]
})
export class HomePageModule {}

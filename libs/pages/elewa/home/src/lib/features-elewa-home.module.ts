import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './pages/home-page/header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent,HeaderComponent],
  exports: [ HomePageComponent ,HeaderComponent]
})
export class HomePageModule {}



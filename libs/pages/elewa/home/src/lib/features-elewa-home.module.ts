import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsModule } from '@elewa-group/features/components/cards';



@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [
    HomePageComponent,
  ],
  exports: [HomePageComponent],

})
export class HomePageModule {}

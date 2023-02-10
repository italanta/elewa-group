import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterModule } from './pages/footer/footer.module';
@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ],
  declarations: [HomePageComponent],
  exports: [ HomePageComponent]
})
export class HomePageModule {}

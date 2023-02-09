import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  imports: [CommonModule,CardsModule],
  declarations: [AboutUsPageComponent],
  exports:[AboutUsPageComponent]
})
export class AboutUsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutUsPageComponent],
  exports:[AboutUsPageComponent]
})
export class AboutUsModule {}

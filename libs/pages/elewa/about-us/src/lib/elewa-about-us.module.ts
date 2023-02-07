import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionCardComponent } from './about-section-card/about-section-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutSectionCardComponent],
  exports: [AboutSectionCardComponent]
})
export class AboutUsModule {}

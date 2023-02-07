import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteHeaderComponent } from './website-header/website-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WebsiteHeaderComponent],
  exports: [WebsiteHeaderComponent],
})
export class ElementsLayoutModule {}

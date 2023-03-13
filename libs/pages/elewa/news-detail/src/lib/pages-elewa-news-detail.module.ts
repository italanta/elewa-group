import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [NewsDetailPageComponent],
})
export class ElewaNewsDetailModule {}

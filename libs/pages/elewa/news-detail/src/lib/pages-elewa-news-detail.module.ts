import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';
import { NewsArticleComponent } from './pages/news-article/news-article.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [NewsDetailPageComponent, NewsArticleComponent],
})
export class ElewaNewsDetailModule {}

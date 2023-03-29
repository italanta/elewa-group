import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { NewsRelatedArticlesComponent } from './components/news-related-articles/news-related-articles.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';

import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';

import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';

import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';
@NgModule({
  imports: [CommonModule, LayoutModule, NgxContentfulRichTextModule ],
  declarations: [NewsDetailPageComponent, NewsArticleComponent, NewsRelatedArticlesComponent],
})

export class ElewaNewsDetailModule {}

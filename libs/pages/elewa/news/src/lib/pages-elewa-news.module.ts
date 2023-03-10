import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';
import { NewsRelatedArticlesComponent } from 'libs/pages/elewa/news-detail/src/lib/pages/news-related-articles/news-related-articles.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule],
  declarations: [NewsPageComponent, NewsRelatedArticlesComponent],
})
export class NewsPageModule {}

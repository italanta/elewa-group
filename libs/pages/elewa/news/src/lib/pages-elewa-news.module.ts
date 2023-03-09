import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';
import { NewsRelatedArticlesComponent } from './components/news-related-articles/news-related-articles.component';

@NgModule({
  imports: [CommonModule,UiListsModule, NewsRoutingModule, LayoutModule],
  declarations: [NewsPageComponent, NewsRelatedArticlesComponent],
})
export class NewsPageModule {}

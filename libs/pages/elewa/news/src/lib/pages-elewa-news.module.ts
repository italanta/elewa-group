import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';
import { NewsRelatedArticlesComponent } from './components/news-related-articles/news-related-articles.component';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';
@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule, UiListsModule],
  declarations: [NewsPageComponent, NewsRelatedArticlesComponent],
})
export class NewsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';

import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';
import { NewsRelatedArticlesComponent } from './components/news-related-articles/news-related-articles.component';

@NgModule({
  imports: [CommonModule, LayoutModule,UiListsModule],
  declarations: [NewsDetailPageComponent, NewsRelatedArticlesComponent],
})
export class ElewaNewsDetailModule {}

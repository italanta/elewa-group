import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';
import { NewsRoutingModule } from './news.routing';

import { ElewaNewsSectionComponent } from './components/elewa-news-section/elewa-news-section.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule, UiListsModule],
  declarations: [NewsPageComponent, ElewaNewsSectionComponent],
})
export class NewsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';
import { ElewaNewsSectionComponent } from './components/elewa-news-section/elewa-news-section.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule],
  declarations: [NewsPageComponent, ElewaNewsSectionComponent],
})
export class NewsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';
import { ElewaNewsDetailModule } from '@elewa-group/pages/elewa/news-detail';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';
@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule, NgxContentfulRichTextModule, ElewaNewsDetailModule],
  declarations: [NewsPageComponent],
})
export class NewsPageModule {}

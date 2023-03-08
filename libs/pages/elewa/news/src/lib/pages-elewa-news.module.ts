import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule],
  declarations: [NewsPageComponent],
})
export class NewsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';

import { NewsRoutingModule } from './news.routing';

@NgModule({
  imports: [CommonModule, NewsRoutingModule],
  declarations: [NewsPageComponent],
})
export class NewsPageModule {}

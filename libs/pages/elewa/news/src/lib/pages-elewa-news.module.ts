import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LayoutModule } from '@elewa-group/elements/layout';
import { NewsRoutingModule } from './news.routing';
import { UiListsModule } from '@elewa-group/features/components/ui-lists';
import { ButtonPlainComponent } from './components/button-plain/button-plain.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, LayoutModule, UiListsModule],
  declarations: [NewsPageComponent, NewsSectionComponent, ButtonPlainComponent]
})
export class NewsPageModule {}

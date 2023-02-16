import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NewsPageComponent } from './pages/news-page/news-page.component';



export const ELEWA_NEWS_ROUTE: Route[] = [

  { path: '', component: NewsPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_NEWS_ROUTE)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

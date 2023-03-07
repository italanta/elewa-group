import { Component } from '@angular/core';

import { Article,data } from './article-interface';
@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})
export class ElewaGroupArticleListComponent {
  articleList:Article[] = data
  generateReadTime(article:string){
    const length = Number(article.split(' ').length)
    const time = Math.ceil(length/200)
    return time
  }
}

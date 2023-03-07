import { Component,Input } from '@angular/core';

import { Article } from './article-interface';
@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})
export class ElewaGroupArticleListComponent {
  @Input() articleList:Article[]
  
  generateReadTime(article:string){
    const words_length = Number(article.split(' ').length)
    const time = Math.ceil(words_length/200)
    return time
  }
}

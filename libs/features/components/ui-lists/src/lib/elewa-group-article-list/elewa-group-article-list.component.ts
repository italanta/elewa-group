import { Component,Input } from '@angular/core';

import { Article } from './article-interface';

@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})

export class ElewaGroupArticleListComponent {
  slideIndex = 1
  width = 0
  @Input() articleList:Article[]
  generateReadTime(article:string){
    const words_length = Number(article.split(' ').length)
    const time = Math.ceil(words_length/200)
    return time
  }
  scroll(n:number){
    const element = document.querySelector('.carousel-container')
    if(n>0){
      if (this.slideIndex>=this.articleList?.length){
        return
      }
        element?.scrollBy({left:500,behavior:"smooth"})
        this.slideIndex++
        this.width = this.width+Math.ceil(2/this.articleList?.length*100)
    }
    else if(n<0){
        element?.scrollBy({left:-500,behavior:"smooth"})
        this.width = this.width-Math.ceil(2/this.articleList?.length*100)
        this.slideIndex--
    }
  }
}
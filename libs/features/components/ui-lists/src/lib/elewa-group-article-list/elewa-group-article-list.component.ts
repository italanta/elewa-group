import { Component, Input } from '@angular/core';
import { Article } from '../models/articles.interface';
// export interface Article { image: string; timestamp: string; title: string; body: string; topic: "Elewa" | "All News" | "iTalanta" | "Press" | "VentureLabs";} 
@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})

export class ElewaGroupArticleListComponent {  
@Input() articles: Article[];

currentIndex = 0;
  calculateReadTime(body: string): number {
    const wordCount = body.split(' ').length;
    const readTime = Math.round(wordCount / 200);
    return readTime;
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const element = document.querySelector('.article-list');
      element?.scrollBy({
        left: -900,
        behavior: 'smooth'
      });
    }
  } 
  scrollRight() {
    if (this.currentIndex < this.articles.length - 3) {
      this.currentIndex++;
      const element = document.querySelector('.article-list');
      element?.scrollBy({
        left: 900,
        behavior: 'smooth'
      });
    }
  }
  nextBanner() {
    this.currentIndex = (this.currentIndex + 1) % this.articles.length;
  }
  previousBanner() {
    this.currentIndex = (this.currentIndex - 1 + this.articles.length) % this.articles.length;
  }
    get progressPercentage() {
    return (this.currentIndex + 1) / this.articles.length * 100;
  }
   }
export { Article };


import { Component, Input } from '@angular/core';
export interface Article { image: string; timestamp: string; title: string; body: string;topic: "elewa" | "all-news" | "iTalanta" | "press" | "venture-labs";} //import this interface in the component you will be reusing article-list in. e.g import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';

@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})

export class ElewaGroupArticleListComponent {  
@Input() articles = [{
  image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=612x612&w=gi&k=20&c=WKGJNH5q42Io6WApbEU-2TqSQTdR2wI5bXwGWAfC8Hg=",
  timestamp: "12 oct 2022 ",
  title: "introduction to controversial learning",
  body: "dummy"
},
{
  image: "https://www.iofs.org.kz/uploads/2022/05/7779.jpg",
  timestamp: "08 dec 2022",
  title: "rewatch the italanta academy launch event",
  body: "dummy",

},

{
  image: "https://media.gettyimages.com/id/950514452/photo/engineer.jpg?s=612x612&w=0&k=20&c=G8Blb3mzohi4De9dsmW1iOlRYY8vmIhx8zrVbRWV3BM=",
  timestamp: "06 0ct 2022",
  title: "introducung conversational",
  body: "dummy"}];

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
import { Component, Input } from '@angular/core';
 //import this interface in the component you will be reusing article-list in. e.g import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';

@Component({
  selector: 'elewa-group-elewa-group-article-list',
  templateUrl: './elewa-group-article-list.component.html',
  styleUrls: ['./elewa-group-article-list.component.scss'],
})

export class ElewaGroupArticleListComponent {  
@Input() articles = [
  {
    image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=1024x1024&w=gi&k=20&c=PuvFkl-X2Zg9sv4Hgrgb8m5VdFY68HX0rRYiHgqV9AM=",
    title: "Intoducing Controversial learning",
    body: "dummy",
    timestamp: "12 Oct 2022",
  },
  {
    image: "https://media.gettyimages.com/id/1324869840/photo/agronomist-using-digital-tablet-for-analysis-of-plantation.jpg?s=1024x1024&w=gi&k=20&c=wVDuGrpZDEYfEX2CJl3WwzBPRJ8NYplUCS2H_kcn6Nk=",
    title: "Re-watch the Italanta Academy Launch event",
    body: "dummy",
    timestamp: "08 Oct 2022",
  },
  {
    image: "https://media.gettyimages.com/id/950514452/photo/engineer.jpg?s=1024x1024&w=gi&k=20&c=81AE7KM5HUg4g0xoRvbUWRC-x1s89cm0CTvIFsIeD1c=",
    title: "Introducing Controversial",
    body: "7 min read",
    timestamp: "05 Oct 2022",
  },
  {
    image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=1024x1024&w=gi&k=20&c=PuvFkl-X2Zg9sv4Hgrgb8m5VdFY68HX0rRYiHgqV9AM=",
    title: "Watch the Italanta Academy Launch event",
    body: "dummy",
    timestamp: "02 Oct 2022",
  },
];

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

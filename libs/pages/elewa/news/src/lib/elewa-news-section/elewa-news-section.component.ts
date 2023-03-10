import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  @Input() newsArticles = [
    {
      image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=1024x1024&w=gi&k=20&c=PuvFkl-X2Zg9sv4Hgrgb8m5VdFY68HX0rRYiHgqV9AM=",
      title: "Intoducing Controversial learning",
      body: "dummy",
      timestamp: "12 Oct 2022",
      topic: 'elewa'
    },
    {
      image: "https://media.gettyimages.com/id/1324869840/photo/agronomist-using-digital-tablet-for-analysis-of-plantation.jpg?s=1024x1024&w=gi&k=20&c=wVDuGrpZDEYfEX2CJl3WwzBPRJ8NYplUCS2H_kcn6Nk=",
      title: "Re-watch the Italanta Academy Launch event",
      body: "dummy",
      timestamp: "08 Oct 2022",
      topic: 'italanta'
    },
    {
      image: "https://media.gettyimages.com/id/950514452/photo/engineer.jpg?s=1024x1024&w=gi&k=20&c=81AE7KM5HUg4g0xoRvbUWRC-x1s89cm0CTvIFsIeD1c=",
      title: "Introducing Controversial",
      body: "7 min read",
      timestamp: "05 Oct 2022",
      topic: 'venture-labs'
    },
    {
      image: "https://media.gettyimages.com/id/sb10069524c-001/photo/south-africa-cape-town-hout-bay-group-portrait-of-boys-jumping-in-field.jpg?s=1024x1024&w=gi&k=20&c=PuvFkl-X2Zg9sv4Hgrgb8m5VdFY68HX0rRYiHgqV9AM=",
      title: "Watch the Italanta Academy Launch event",
      body: "dummy",
      timestamp: "02 Oct 2022",
      topic: 'press'
    },
  ]

  @Input() activeArticle = 'all-news'

  makeActive(topic: string){
    this.activeArticle = topic
  }

  getNews(activeArticle: string) :{image: string, timestamp: string, title: string, body: string}[] {
    if(this.activeArticle == 'all-news'){
      return this.newsArticles;
    }

    return this.newsArticles.filter(article => {
      return article.topic == this.activeArticle;
    })
  }

}

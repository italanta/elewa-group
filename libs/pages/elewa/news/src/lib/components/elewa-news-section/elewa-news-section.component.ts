import { Component } from '@angular/core';
import { Article } from 'libs/features/components/ui-lists/src/lib/models/article.interface'
// import {Article}

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {

tabs = ["all-news", "elewa", "iTalanta", "venture-labs", "press"]

  news: Article[]= [
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'elewa',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'elewa',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'elewa',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'press',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article press',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'press',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article press',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'press',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: "2017",
      title: 'Article press',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'press',
    },
  ];
  
  

  filteredArticles: Article[];
  selectedTab: string;
  constructor() {
    // Default to "All News" tab
    this.selectedTab = 'all-news';  //filter through the tabs after creating the filter method for the articles
    this.filterArticles();
  }
  //method to filter articles
  filterArticles() {
    this.filteredArticles = this.news.filter(article => article.topic === this.selectedTab || this.selectedTab === 'all-news');
  }
}

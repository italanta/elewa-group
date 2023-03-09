import { Component } from '@angular/core';
import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  news: Article []= [
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: new Date().toString(),
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'world',
      
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: new Date().toString(),
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'world',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: new Date().toString(),
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'world',
    },
    {
      image: 'https://picsum.photos/id/1018/800/600',
      timestamp: new Date().toString(),
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'world',
    },
  ];

  filteredArticles: Article[];
  selectedTab: string;

  constructor() {
    // Default to "All News" tab
    this.selectedTab = 'all-news';
    this.filterArticles();
  }
  filterArticles() {
    this.filteredArticles = this.news.filter(article => article.topic === this.selectedTab || this.selectedTab === 'all-news');
  }

}

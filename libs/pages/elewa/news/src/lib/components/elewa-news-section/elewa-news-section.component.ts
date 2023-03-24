import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  tabs = ["All News", "Elewa", "iTalanta", "VentureLabs", "Press"];

  news: Article []= [
    {
      image: 'https://cdn-3.motorsport.com/images/amp/0oODaa70/s6/charles-leclerc-ferrari-f1-75-.jpg',
      timestamp: new Date().toString(),
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'Elewa',

    },
    {
      image: 'https://cdn-8.motorsport.com/images/amp/YBeAJKn2/s500/formula-1-bahrain-gp-2023-lewi-2.jpg',
      timestamp: new Date().toString(),
      title: 'Article 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'Elewa',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4apChMPoc4jfGs3theGVK7b6nA9GJRep8ug&usqp=CAU',
      timestamp: new Date().toString(),
      title: 'Article 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'Elewa',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4q6_6xt3Oz_lymcCKTT8VQiL4Nex6Dqx1VQ&usqp=CAU',
      timestamp: new Date().toString(),
      title: 'Article 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'Elewa',
    },
     {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GxwyE91Ih7hjHTiL8a6zsyGLUqYar5kybg&usqp=CAU',
      timestamp: new Date().toString(),
      title: 'Article 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'Press',
    },
     {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4q6_6xt3Oz_lymcCKTT8VQiL4Nex6Dqx1VQ&usqp=CAU',
      timestamp: new Date().toString(),
      title: 'Article 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'iTalanta',
    },
     {
      image: 'https://cdn-3.motorsport.com/images/amp/0oODaa70/s6/charles-leclerc-ferrari-f1-75-.jpg',
      timestamp: new Date().toString(),
      title: 'Article 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      topic: 'VentureLabs',
    },
  ];

  filteredArticles: Article[];
  selectedTab: string;

  constructor() {
    
    this.selectedTab = 'All News';  
    this.filterArticles();
  }

  filterArticles() {  
    this.filteredArticles = this.news.filter(article => article.topic === this.selectedTab || this.selectedTab === 'All News');
  } 

}
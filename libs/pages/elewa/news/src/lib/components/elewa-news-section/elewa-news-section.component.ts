import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  activeTab = 'all';

  articles = [
    {
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      image: 'https://picsum.photos/id/1018/800/600',
      srcset: 'https://picsum.photos/id/1018/400/300 400w, https://picsum.photos/id/1018/800/600 800w',
      category: 'world',
      timestamp: new Date()
    },
    {
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      image: 'https://picsum.photos/id/1018/800/600',
      srcset: 'https://picsum.photos/id/1018/400/300 400w, https://picsum.photos/id/1018/800/600 800w',
      category: 'world',
      timestamp: new Date()
    },
    {
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      image: 'https://picsum.photos/id/1018/800/600',
      srcset: 'https://picsum.photos/id/1018/400/300 400w, https://picsum.photos/id/1018/800/600 800w',
      category: 'world',
      timestamp: new Date()
    },
    {
      title: 'Article 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tempor risus. Maecenas gravida felis a semper bibendum.',
      image: 'https://picsum.photos/id/1018/800/600',
      srcset: 'https://picsum.photos/id/1018/400/300 400w, https://picsum.photos/id/1018/800/600 800w',
      category: 'world',
      timestamp: new Date()
    },
  ]

  get filteredArticles() {
    return this.articles.filter(article => article.category === this.activeTab);
    }
    
  
}

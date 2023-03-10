import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'libs/features/components/ui-lists/src/lib/elewa-group-article-list/elewa-group-article-list.component';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  @Input() headline = 'News & Stories';

  data: Article[] = [
    {
      title: 'All News',
      topic: 'press',
      image:'https://images.pexels.com/photos/4316733/pexels-photo-4316733.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:'https://images.pexels.com/photos/14642595/pexels-photo-14642595.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      topic: 'italanta',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://images.pexels.com/photos/14189213/pexels-photo-14189213.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      topic: 'press',
      timestamp: '05 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://images.pexels.com/photos/15745077/pexels-photo-15745077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      topic: 'elewa',
      timestamp: '05 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://images.pexels.com/photos/10547939/pexels-photo-10547939.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      topic: 'venture-labs',
      timestamp: '05 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://images.pexels.com/photos/5705080/pexels-photo-5705080.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      topic: 'press',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  articleList: Article[];
  selectedTab: string;

  constructor() {
    this.selectedTab = 'all-news';

    this.applyFilter();
  }
  applyFilter(){
    this.articleList = this.data.filter(a => a.topic === this.selectedTab || this.selectedTab === 'all-news')
  }
}

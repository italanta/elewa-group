import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent implements OnInit {
  @Input() headline = 'News & Stories';
  selectedTab = 'All News';

  @Input() articlesList = [
    {
      title: 'All News',
      topic: 'press',
      image:'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
      topic: 'italanta',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      topic: 'press',
      timestamp: '05 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      topic: 'elewa',
      timestamp: '05 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      topic: 'venture-labs',
      timestamp: '05 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      topic: 'press',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  articleList$ = of(this.articlesList);

  ngOnInit(): void {
    this.applyFilter('all-news');
  }

  applyFilter(selectedTopic: string) {
    this.articlesList.filter((a) => a.topic === selectedTopic);
  }
}

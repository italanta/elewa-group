import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  @Input() headline = 'News & Stories';
  selectedTab = 'All News';

  // @Input() tabs = [
  //   {
  //     id: 'tab1',
  //     title: 'All News',
  //     content: [
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
  //         timestamp: '12 Oct 2022',
  //         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
  //       },
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
  //         timestamp: '08 Oct 2022',
  //         body: '',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'tab2',
  //     title: 'Elewa',
  //     content: [
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
  //         timestamp: '22 Nov 2022',
  //         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
  //       },
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
  //         timestamp: '30 Dec 2022',
  //         body: '',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'tab3',
  //     title: 'ITalanta',
  //     content: [
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
  //         timestamp: '19 Jan 2022',
  //         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
  //       },
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
  //         timestamp: '28 Mar 2022',
  //         body: '',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'tab4',
  //     title: 'VentureLabs',
  //     content: [
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
  //         timestamp: '14 Apr 2022',
  //         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
  //       },
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
  //         timestamp: '11 Jul 2022',
  //         body: '',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'tab5',
  //     title: 'Press',
  //     content: [
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
  //         timestamp: '20 Jun 2022',
  //         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
  //       },
  //       {
  //         title: '',
  //         image:
  //           'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
  //         timestamp: '08 Oct 2022',
  //         body: '',
  //       },
  //     ],
  //   },
  // ];

  @Input() articlesList = [
    {
      title: 'All News',
      image:
        'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  @Input() ElewaList = [
    {
      title: 'Elewa',
      image:
        'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  @Input() ITalantaList = [
    {
      title: 'ITalanta',
      image:
        'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  @Input() VentureList = [
    {
      title: 'Venture',
      image:
        'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  @Input() PressList = [
    {
      title: 'The Press',
      image:
        'https://www.pexels.com/photo/girl-in-white-shirt-taking-selfie-on-mobile-phone-with-pink-case-while-sitting-in-wardrobe-5705080/',
      timestamp: '12 Oct 2022',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi omnis eligendi optio, nihil alias illo molestias? Exercitationem, culpa? Sequi libero nam aut reiciendis officia officiis accusantium iste hic in!',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/woman-posing-in-dress-between-curtains-13646258',
      timestamp: '08 Oct 2022',
      body: '',
    },
    {
      title: '',
      image:
        'https://www.pexels.com/photo/man-in-black-suit-selling-ugandanrolex-10411247/',
      timestamp: '05 Oct 2022',
      body: '',
    },
  ];

  switchTab(tab: string) {
    this.selectedTab = tab;
  }
}

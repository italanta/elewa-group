import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-activity-section',
  templateUrl: './activity-section.component.html',
  styleUrls: ['./activity-section.component.scss'],
})
export class ActivitySectionComponent {
  cards = [
    {
      subtitle: 'Education',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Education_hstyzo.png',
      description:
        'A key player in the development and operations of a new-age human-centered digital learning experiences.',
      title: 'Elewa',
    },
    {
      subtitle: 'Technology',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/technolagy_sgfgo6.png',
      description:
        '"Offshore tech services which accelerate your business and our talent."',
      title: 'Italanta',
    },
    {
      subtitle: 'Ventures',
      imgSrc:
        'https:res.cloudinary.com/dyl3rncv3/image/upload/v1675690296/elewa-group-website/Icons/SVG/venturelabs_icon_vfnmpj.svg',
      description:
        'Sometimes to grow means to let go.Our bravest move into Venture Labs,where our people they start and accelerate their own startups',
      title: 'Venture Labs',
    },
  ];
}
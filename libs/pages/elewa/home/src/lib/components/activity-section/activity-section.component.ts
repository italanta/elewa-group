import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-activity-section',
  templateUrl: './activity-section.component.html',
  styleUrls: ['./activity-section.component.scss'],
})
export class ActivitySectionComponent implements OnInit {
  cards = [
    {
      subtitle: 'Education',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Education_hstyzo.png',
      description:
        'Conversational learning and other new-age human-centered digital learning experiences.',
      title: 'Elewa',
      link: 'https://elewa.education',
    },
    {
      subtitle: 'Technology',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1680178812/elewa-group-website/Icons/PNG/technolagy_120x125_hpgq8i.png',
      description:
        'Offshore tech services which accelerate your business and our talent.',
      title: 'Italanta',
      link: 'https://italanta.net',
    },
    {
      subtitle: 'Ventures',
      imgSrc:
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/brands_z6sf8c.png',
      description:
        'Venture studio for early-stage startups by elewa entrepreneurs.',
      title: 'Venture Labs',
      link: '/venture-labs',
    },
  ];

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
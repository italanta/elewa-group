import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-team-members-carousel',
  templateUrl: './team-members-carousel.component.html',
  styleUrls: ['./team-members-carousel.component.scss'],
})

export class TeamMembersCarouselComponent {

  teamMembers = [
    {
      name: 'Johnson Doe',
      role: 'Founder, Managing Partner',
      imageLink:'https://img.freepik.com/free-photo/portrait-middle-aged-businessman-suit_186202-880.jpg?w=740&t=st=1675967186~exp=1675967786~hmac=d84e42e6dde175c53c4f57c4155277939e53a48af5e18853deff55e55c6a1f75',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Dancan May',
      role: 'Executive Chairman',
      imageLink:'https://img.freepik.com/free-photo/african-american-businessman-gray-suit-studio-portrait_53876-102940.jpg?w=360&t=st=1675967225~exp=1675967825~hmac=3e02d4617762c6033b4964a59c91965253ce491675f3af94ec54905af404ac86',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Job Kimani',
      role: 'Operations & Partnerships',
      imageLink:'https://img.freepik.com/free-photo/portrait-happy-businessman-standing-office_23-2147899580.jpg?w=740&t=st=1675967366~exp=1675967966~hmac=1bd37d428accaf5988fcb1ac9238746616148fabf24f2083784720b6ab6ec5c4',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Jane Dawson',
      role: 'Management',
      imageLink:'https://img.freepik.com/free-photo/confident-businesswoman-sitting-wooden-stool-jobs-career-campaign_53876-129403.jpg?w=360&t=st=1675967320~exp=1675967920~hmac=3ec22ccec88b0f4b870535e06ad733478e6e68c95f41395fb938a4e564ab2ce5',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Job Kimani',
      role: 'Operations & Partnerships',
      imageLink:'https://img.freepik.com/free-photo/portrait-happy-businessman-standing-office_23-2147899580.jpg?w=740&t=st=1675967366~exp=1675967966~hmac=1bd37d428accaf5988fcb1ac9238746616148fabf24f2083784720b6ab6ec5c4',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Jane Dawson',
      role: 'Management',
      imageLink:'https://img.freepik.com/free-photo/confident-businesswoman-sitting-wooden-stool-jobs-career-campaign_53876-129403.jpg?w=360&t=st=1675967320~exp=1675967920~hmac=3ec22ccec88b0f4b870535e06ad733478e6e68c95f41395fb938a4e564ab2ce5',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
  ];

}



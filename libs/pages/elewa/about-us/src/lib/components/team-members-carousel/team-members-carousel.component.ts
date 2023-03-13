import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-team-members-carousel',
  templateUrl: './team-members-carousel.component.html',
  styleUrls: ['./team-members-carousel.component.scss'],
})

export class TeamMembersCarouselComponent {

  teamMembers = [
    {
      name: 'Jente Rossell',
      role: 'Founder, Managing Partner',
      imageLink:'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690305/elewa-group-website/Team/Mask_Group_13_mgajlm.png',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Peter Reinartz',
      role: 'Executive Chairman',
      imageLink:'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690304/elewa-group-website/Team/Mask_Group_4_fk3hzv.png',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Kennedy Adhola',
      role: 'Operations & Partnerships',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690305/elewa-group-website/Team/Mask_Group_5_qd54pd.png',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Herman',
      role: 'Management',
      imageLink:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690304/elewa-group-website/Team/Mask_Group_4_fk3hzv.png",
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Ian Odhiambo',
      role: 'Software Engineer',
      imageLink:'https://img.freepik.com/free-photo/successful-businessman-sitting-wooden-stool-jobs-career-campaign_53876-129404.jpg?w=360&t=st=1676277173~exp=1676277773~hmac=86f6cae7d4a6b8123f3b13132256b2ad905fcb9a403de395889d2a5c126c3753',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Reagan Cherana',
      role: 'Software Engineer',
      imageLink:'https://img.freepik.com/free-photo/cheerful-smiling-female-professional-posing-near-office_1262-21010.jpg?w=360&t=st=1676277257~exp=1676277857~hmac=97be74fdc6bb1812a20e94bc0c8bb4e16a4ba801af415a3ba93cae6f20340020',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
  ];

}



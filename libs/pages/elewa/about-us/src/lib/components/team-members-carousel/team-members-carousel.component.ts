import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-team-members-carousel',
  templateUrl: './team-members-carousel.component.html',
  styleUrls: ['./team-members-carousel.component.scss'],
})

export class TeamMembersCarouselComponent {

  showTeamMember: boolean = false;
  currentBannerIndex: number = 0;

  teamMembers = [
    {
      name: 'Jente Rosseel',
      role: 'Founder, Managing Partner',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        `I believe education can be meaningful and enjoyable. Coming from a formal education background in Belgium, 
        I started Elewa with a mission to strengthen formal and traditional education systems. 
        I realized that education, work, and life are indistinguishably linked.
        <br>
        Having diversified to many different sectors and activities since, we are still an education company to date. 
        For we have only one measurement of success; The continuous growth of others and self.`,
    },

    {
      name: 'Peter Reinartz',
      role: 'Executive Chairman',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },

    {
      name: 'Kennedy Adhola',
      role: 'Operations & Partnerships',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Zipporah Ntabo',
      role: 'Office Administrator & Finance',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/zip-elewa_jksbfg.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Ian Odhiambo',
      role: 'Founder Kujali',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Shawn Chiama',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Jane Njoroge',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Reagan Cherana',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Noella Mwanzia',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Paul Chesa',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679666201/elewa-group-website/elewa-team-members/chesa-elewa_soeb8f.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Jeff Kingori',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Frankline Odero',
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
  ];


  showTeamMemberDetails(teamMember: any, index: number) {
    this.showTeamMember = true;
    this.currentBannerIndex = index;
  }

  closeTeamMemberDetailsTriggered() {
    this.showTeamMember = false;
  }
}



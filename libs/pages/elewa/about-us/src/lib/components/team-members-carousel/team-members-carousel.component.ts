import { Component } from '@angular/core';

import { TeamMember } from '../../models/team-member.interface';

@Component({
  selector: 'elewa-group-team-members-carousel',
  templateUrl: './team-members-carousel.component.html',
  styleUrls: ['./team-members-carousel.component.scss'],
})

export class TeamMembersCarouselComponent {

  showTeamMember: boolean = false;
  currentBannerIndex: number = 0;

  allTeamMembers: TeamMember[] = [
    {
      name: 'Jente Rosseel',
      management: true,
      role: 'Founder, Managing Partner',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/jrosseel/',
      summary:
        `I believe education can be meaningful and enjoyable. Coming from a formal education background in Belgium, 
        I started Elewa with a mission to strengthen formal and traditional education systems. 
        I realized that education, work, and life are indistinguishably linked.
        <br>
        Having diversified to many different sectors and activities since, we are still an education company to date. 
        For we have only one measurement of success; The continuous growth of others and self.`,
    },
    {
      name: 'Kennedy Adhola',
      management: true,
      role: 'Operations & Partnerships',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/kennedy-adhola-97570535/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Peter Reinartz',
      management: true,
      role: 'Executive Chairman',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/peter-reinartz-1b4452ab/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Zippie Ntabo',
      management: false,
      role: 'Office Administrator & Finance',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/zip-elewa_jksbfg.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/zippie-ntabo-310693134/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Ian Odhiambo',
      management: false,
      role: 'Founder Kujali',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Shawn Chiama',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Jane Njoroge',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/jane-w-njoroge/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Reagan Cherana',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/reagan-charana/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Noella Mwanzia',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/noella-mwanzia-633803173/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Paul Chesa',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679666201/elewa-group-website/elewa-team-members/chesa-elewa_soeb8f.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/paulchesa/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Joy-Linda Wawira',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679984133/elewa-group-website/elewa-team-members/joy_gvbweu.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/joy-wawira/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Jeff Kingori',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/jeffrey-king-ori-165333164/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Lynn Anastasia',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/lynn-nyangon/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Frankline Odero',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/frankline-sable/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
    {
      name: 'Stephen Mwaura',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/stephenlemmymwaura/',
      summary:
        'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    },
  ];

  teamMembers: TeamMember[] = this.allTeamMembers;

  mngmentMembersIsActive: boolean = true;

  showTeamMemberDetails(teamMember: any, index: number) {
    this.showTeamMember = true;
    this.currentBannerIndex = index;
  }

  closeTeamMemberDetailsTriggered() {
    this.showTeamMember = false;
  }

  applyFilter(managementValue: boolean) {
    this.mngmentMembersIsActive = !managementValue;
    managementValue ? this.teamMembers = this.allTeamMembers.filter((teamMember) => teamMember.management === managementValue)
                    :this.teamMembers = this.allTeamMembers;
  }

  goToSocialProfile(socialProfileLink: string) {
    window.open(socialProfileLink, '_blank');
  }
}



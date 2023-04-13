import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

import { TeamMember } from '../../models/team-member.interface';

@Component({
  selector: 'elewa-group-team-members-carousel',
  templateUrl: './team-members-carousel.component.html',
  styleUrls: ['./team-members-carousel.component.scss'],
})

export class TeamMembersCarouselComponent implements OnInit {

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
        <br/><br/>
        Having diversified to many different sectors and activities since, we are still an education company at core. 
        For we have only one measurement of success i.e. the continuous growth of others and self.`,
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
      name: 'Noella Mwanzia',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/noella-mwanzia-633803173/',
      summary:
        `Elewa has helped me broaden my perspective which has been a game changer that enables me to work on 
              meaningful and innovative solutions that impact society. Certainly gotten used to 
              channeling my potential to solve everyday problems. Couldn't have it any other way!`   
    },
    {
      name: 'Ian Odhiambo',
      management: false,
      role: 'Founder Kujali',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        `As pioneer of the Elewa's first Venture Lab, my ultimate goal is to leverage my expertise, acquired over the years, 
         to create a successful venture that will revolutionise an industry and make a 
         meaningful impact to the people around the world.`,
    },
    {
      name: 'Jane Njoroge',
      management: false,
      role: 'Software Developer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/jane-w-njoroge/',
      summary:
        `As a Software Developer, benefiting from the apprenticeship training program at Elewa,
           my passion for learning and collaboration is enabling me deliver high-quality software solutions 
           to our clients while ensuring my continuous professional growth.`    
    },
    {
      name: 'Shawn Chiama',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/feed/',
      summary:
        `As a Senior Software Engineer, I am committed to instilling a sense of pride and ownership in my mentees, 
          while fostering a growth mindset and a dedication to continuous learning. 
          By building a community of engineers who prioritize impact and quality, 
          I believe we can shape the future of software engineering and create positive change with everything we create.`,
    },
    {
      name: 'Joy-Lidah Wawira',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_800/v1679984133/elewa-group-website/elewa-team-members/joy_gvbweu.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/joy-wawira/',
      summary:
        `I am language agnostic. Developing innovative, robust and scalable software products with an aim to 
            solve social and enterprise challenges. I believe in the power of sharing knowledge and ideas.`        
    },
    {
      name: 'Reagan Charana',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/reagan-charana/',
      summary:
        `I like to get technical 😎. From systems requiring nano-second accuracy on speed, 
          to developing no-code chatbot editors for non-technical users. DevOps is my second name.
          Currently leading the development of our Elewa Conversational Learning manager. 
          <br/> <br/>
          Outside of work, find me at the chess table, networking, or staying up-to-date 
            with the latest astronomy discoveries.`
    },
    {
      name: 'Paul Chesa',
      management: false,
      role: 'Software Engineer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679666201/elewa-group-website/elewa-team-members/chesa-elewa_soeb8f.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/paulchesa/',
      summary:
        `Passionate about how frameworks such as JavaScript, Angular, React, 
          Google Cloud and Firebase may aid to drive innovation that will ensure sustainability of a 
          digital world that harness human interaction.`   
    },
    {
      name: `Jeff King'ori`,
      management: false,
      role: 'Software Developer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/jeffrey-king-ori-165333164/',
      summary:
        `I am thrilled to be part of Elewa, a company that invests in talent development while making 
            meaningful impact in the world.`        
    },
    {
      name: 'Zippie Ntabo',
      management: false,
      role: 'Office Administrator & Finance',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/zip-elewa_jksbfg.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/zippie-ntabo-310693134/',
      summary:
        `I run Elewa's administration, ultimately driven by the satisfaction of contributing to growth and success of Elewa in both the Finance and 
        Admin Department.`    
    },
    // {
    //   name: 'Lynn Anastasia',
    //   management: false,
    //   role: 'Software Engineer',
    //   imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
    //   LinkedInProfileLink: 'https://www.linkedin.com/in/lynn-nyangon/',
    //   summary:
    //     'This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.',
    // },
    {
      name: 'Frankline Odero',
      management: false,
      role: 'Software Developer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/frankline-sable/',
      summary:
        `I am passionate about developing app and web projects, gami(ng)fication projects as well as handling bits and pieces of computer hardware engineering. 
          <br/><br/>  
          I believe that continous learning and development helps any one to stay ahead of the curve.`        
    },
    {
      name: 'Stephen Mwaura',
      management: false,
      role: 'Software Developer',
      imageLink: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg',
      LinkedInProfileLink: 'https://www.linkedin.com/in/stephenlemmymwaura/',
      summary:
        `I have a strong desire to build software solutions that make a positive impact on people's lives 
            taking into account user experience and the excellence desired.`        
    },
  ];

  teamMembers: TeamMember[] = this.allTeamMembers;

  mngmentMembersIsActive: boolean = true;

  ngOnInit(): void {
    AOS.init({once: true, disable: 'mobile'});
  }

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



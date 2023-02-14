import { Component, Input } from '@angular/core';

@Component({
  selector: './elewa-group-team-member',
  templateUrl: './elewa-group-team-member.component.html',
  styleUrls: ['./elewa-group-team-member.component.scss'],

})
export class ElewaGroupTeamMemberComponent {

 //some scaffold text
  @Input()banners = [{
    imageUrl: 'https://italanta.net/static/jente-2fb716998147c60299cc01a7fc0e15cc.png',
    name: 'Jente Rosseel',
    title: 'Founder, Managing Partner',
    description: 'I believe education can be meaningful and enjoyable. Coming from  formal educational background in Belgium, I started Elewa with a mission to strengthen formal and traditional educational systems. I realixed that education, work, and life, are indistinguishably linked',
    linkedInUrl: 'https://ke.linkedin.com/in/jrosseel'
  },
  {
    imageUrl: 'https://ca.slack-edge.com/T077KKCG6-U03UJ0NEF1C-7a918a247205-512',
    name: 'Ian Odhiambo',
    title: 'Engineer',
    description: 'Elewa is about changing the narrative, to ensure anyone across the world can experience education & training that is meaningful and enjoyable to them.',
    linkedInUrl: 'https://linkedin.com/in/your-linkedin-profile'
  }
  ]
  currentBannerIndex = 0;

  nextBanner() {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
  }

  previousBanner() {
    this.currentBannerIndex = (this.currentBannerIndex - 1 + this.banners.length) % this.banners.length;
  }
  
  get progressPercentage() {
    return (this.currentBannerIndex + 1) / this.banners.length * 100;
  }
  
}
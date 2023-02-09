import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-team-member',
  templateUrl: './elewa-group-team-member.component.html',
  styleUrls: ['./elewa-group-team-member.component.scss'],



})
export class ElewaGroupTeamMemberComponent {

  @Input() banners = [{
    imageUrl: 'https://italanta.net/static/jente-2fb716998147c60299cc01a7fc0e15cc.png',
    name: 'Jente Rosseel',
    title: 'Founder, Managing Partner',
    description: 'Elewa is about changing the narrative, to ensure anyone across the world can experience education & training that is meaningful and enjoyable to them.',
    linkedInUrl: 'https://linkedin.com/in/your-linkedin-profile'
  },
  {
    imageUrl: 'https://italanta.net/static/jente-2fb716998147c60299cc01a7fc0e15cc.png',
    name: 'Someone Else Same Face',
    title: 'Not Founder, Not Managing Partner',
    description: 'Elewa is about changing the narrative, to ensure anyone across the world can experience education & training that is meaningful and enjoyable to them.',
    linkedInUrl: 'https://linkedin.com/in/your-linkedin-profile'
  }
  ]


  currentBannerIndex = 0;

  nextBanner() {
    // console.log("Next button clicked, current index: ", this.currentBannerIndex);
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
  }

  previousBanner() {
    // console.log("Previous button clicked, current index: ", this.currentBannerIndex);
    this.currentBannerIndex = (this.currentBannerIndex - 1 + this.banners.length) % this.banners.length;
  }

  
  get progressPercentage() {
    return (this.currentBannerIndex + 1) / this.banners.length * 100;
  }

  goBackToMultiUserView() {

    console.log("clicked")
    // code to change state back to multi-user view
  }

}



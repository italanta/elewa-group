import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent {
  @Input () members = [{
    name : 'Jente Rosseel',
    title : 'Founder,Managing Partner',
    imageSrc : 'https://i.postimg.cc/6pWDZNNp/jente.jpg',
    description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quia quae aspernatur similique, adipisci, debitis hic commodi impedit natus exercitationem tempore error, ratione dolore aliquam quis. Officia officiis veniam commodi.',
    linkedinUrl : ''
  },
  {
    name : 'Kennedy Adhola',
    title : 'Operations & Partnerships',
    imageSrc : 'https://unsplash.com/photos/WNoLnJo7tS8',
    description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quia quae aspernatur similique, adipisci, debitis hic commodi impedit natus exercitationem tempore error, ratione dolore aliquam quis. Officia officiis veniam commodi.',
    linkedinUrl : ''
  }
]

currentMemberIndex = 0;

nextMember() {
  this.currentMemberIndex = (this.currentMemberIndex + 1) % this.members.length;
}

previousMember() {
  this.currentMemberIndex = (this.currentMemberIndex - 1 + this.members.length) % this.members.length;
}

get whichMember () {
  return (this.currentMemberIndex + 1) / this.members.length*100;
}

closeMemberView() {
  console.log('return to about page')
}
}

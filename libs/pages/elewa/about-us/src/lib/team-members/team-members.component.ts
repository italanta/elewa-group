import { Component, Input, OnInit } from '@angular/core';
import { Members } from './membersInterface';

interface Members {
  name: string;
  role: string;
  imageLink: string;
  LinkedInProfileLink?: string;
  summary: string;
}

@Component({
  selector: 'elewa-group-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent implements OnInit {
  @Input() membersArr: Members[] = [];
  mainDiv = document.querySelector('.team-main');
  leftMove() {
    this.mainDiv ? (this.mainDiv.scrollLeft += 320) : '';
  }
  rightMove() {
    this.mainDiv ? (this.mainDiv.scrollLeft += 320) : '';
  }

  ngOnInit(): void {
    this.mainDiv = document.querySelector('.team-main');
    this.membersArr = [
      {
        name: 'Jente Rosseel',
        role: 'Founder, Managing Partner',
        imageLink:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        LinkedInProfileLink: '',
        summary: 'lorem ipsum dolor sint',
      },
      {
        name: 'Peter Reinartz',
        role: 'Founder, Executive Chairman',
        imageLink:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        LinkedInProfileLink: '',
        summary: 'lorem ipsum dolor sint',
      },
      {
        name: 'Kennedy Adhola',
        role: 'Operations & Partnerships',
        imageLink:
          'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        LinkedInProfileLink: '',
        summary: 'lorem ipsum dolor sint',
      },
      {
        name: 'Herman Vandenbranden',
        role: 'Management',
        imageLink:
          'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        LinkedInProfileLink: '',
        summary: 'lorem ipsum dolor sint',
      },
    ];
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent {
  @Input () name = 'Jente Rosseel'
  @Input () title = 'Founder,Managing Partner'
  @Input () imageSrc = 'https://i.postimg.cc/6pWDZNNp/jente.jpg'
  @Input () descrition = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quia quae aspernatur similique, adipisci, debitis hic commodi impedit natus exercitationem tempore error, ratione dolore aliquam quis. Officia officiis veniam commodi.'
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-team-and-partners',
  templateUrl: './team-and-partners.component.html',
  styleUrls: ['./team-and-partners.component.scss'],
})
export class TeamAndPartnersComponent {
  @Input() imageSrc = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690292/elewa-group-website/hero-Images/team_nmmhnc.jpg';
  @Input() imgWidth = '340';
  @Input() imgHeight = '200';
}

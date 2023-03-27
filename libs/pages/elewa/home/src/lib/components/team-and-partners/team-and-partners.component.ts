import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-team-and-partners',
  templateUrl: './team-and-partners.component.html',
  styleUrls: ['./team-and-partners.component.scss'],
})
export class TeamAndPartnersComponent {
  @Input() imageSrc = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg';
  @Input() imgWidth = '340';
  @Input() imgHeight = '200';
}

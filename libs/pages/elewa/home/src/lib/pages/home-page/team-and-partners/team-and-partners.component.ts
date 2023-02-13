import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-team-and-partners',
  templateUrl: './team-and-partners.component.html',
  styleUrls: ['./team-and-partners.component.scss'],
})
export class TeamAndPatrnersComponent {
  @Input() image= "https://cdn.pixabay.com/photo/2019/05/13/20/38/team-4200837_960_720.jpg";
  @Input() imgWidth = '300';
  @Input() imgHeight = '200';
}

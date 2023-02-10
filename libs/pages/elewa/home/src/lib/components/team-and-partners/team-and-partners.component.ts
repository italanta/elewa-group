import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-team-and-partners',
  templateUrl: './team-and-partners.component.html',
  styleUrls: ['./team-and-partners.component.scss'],
})
export class TeamAndPartnersComponent {
  @Input() imageSrc = 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  @Input() imgWidth = '340';
  @Input() imgHeight = '200';
}

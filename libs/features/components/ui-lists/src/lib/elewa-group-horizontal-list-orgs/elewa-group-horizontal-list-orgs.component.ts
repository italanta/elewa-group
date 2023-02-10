import { Component } from '@angular/core';
import { partners } from '../features-components-ui-lists.partners';

@Component({
  selector: 'elewa-group-elewa-group-horizontal-list-orgs',
  templateUrl: './elewa-group-horizontal-list-orgs.component.html',
  styleUrls: ['./elewa-group-horizontal-list-orgs.component.scss'],
})
export class ElewaGroupHorizontalListOrgsComponent {
  partners = [...partners];
}